import { create } from 'ipfs-http-client'
import { ethers, Transaction } from 'ethers'

import Web3Modal from 'web3modal'
import { infuraStorageId, infuraStorageSecret, infuraSubdomainKey } from '../configs'
import { nftAddress, nftMarketAddress } from '../configs/nftAddress'
import NFT from '../../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { ArrayBufferFile, CreateItem, CreateSale } from './Create.types'

const auth = `Basic ${Buffer.from(`${infuraStorageId}:${infuraStorageSecret}`).toString(
  'base64'
)}`
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  },
})

/**
 * Creates a sale by minting an NFT and listing it on the marketplace.
 * @param {CreateSale} options - The options for creating the sale.
 * @returns {Promise<Transaction>} A promise that resolves to the transaction object.
 * @typedef {Object} CreateSale
 * @property {string} price - The price of the sale.
 * @property {string} url - The URL of the NFT.
 */
async function createSale({ price, url }: CreateSale): Promise<Transaction> {
  const web3Modal = new Web3Modal()
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()

  /* next, create the item */
  let contract = new ethers.Contract(nftAddress, NFT.abi, signer)
  let transaction = await contract.createToken(url)
  const tx = await transaction.wait()
  const event = tx.events[0]
  const value = event.args[2]
  const tokenId = value.toNumber()

  const realPrice = ethers.utils.parseUnits(price, 'ether')

  /* then list the item for sale on the marketplace */
  contract = new ethers.Contract(nftMarketAddress, Market.abi, signer)
  let listingPrice = await contract.getListingPrice()
  listingPrice = listingPrice.toString()

  transaction = await contract.createMarketItem(nftAddress, tokenId, realPrice, {
    value: listingPrice,
  })
  return transaction.wait()
}

/**
 * Saves an image file to IPFS and returns the URL of the saved image.
 * @param {ArrayBufferFile} file - The image file to be saved.
 * @returns {Promise<string>} A promise that resolves to the URL of the saved image.
 * @throws {Error} If there is an error saving the image.
 */
export async function saveImage(file: ArrayBufferFile) {
  try {
    if (!file) return ''
    const added = await client.add(file, {
      progress: (prog) => console.log(`received: ${prog}`),
    })
    const url = `https://${infuraSubdomainKey}.infura-ipfs.io/ipfs/${added.path}`
    return url
  } catch (error: any) {
    throw new Error(error)
  }
}

/**
 * Saves an image file to IPFS and returns the URL of the saved image.
 * @param {ArrayBufferFile} file - The image file to be saved.
 * @returns {Promise<string>} A promise that resolves to the URL of the saved image.
 * @throws {Error} If there is an error saving the image.
 */
export async function createItem({ formInput, file }: CreateItem): Promise<Transaction> {
  const fileURL = await saveImage(file)
  const { name, description, price } = formInput
  // if (!name || !description || !price || fileURL === '') return
  const data = JSON.stringify({
    name,
    description,
    image: fileURL,
  })
  try {
    const added = await client.add(data)
    const url = `https://${infuraSubdomainKey}.infura-ipfs.io/ipfs/${added.path}`

    /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    const transaction = await createSale({ price, url })
    return transaction
  } catch (error: any) {
    throw new Error(error)
  }
}

/**
 * Retrieves an image from IPFS based on the given key.
 * @param {string} key - The key of the image to retrieve.
 * @returns {Promise<Response>} A promise that resolves to the response object containing the retrieved image.
 * @throws {Error} If there is an error retrieving the image.
 */
export async function getImage(key: string) {
  const url = `https://ipfs.infura.io:5001/api/v0/get?arg=${key}&archive=true`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: auth,
      },
    })
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}
