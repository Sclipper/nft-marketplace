import { create } from 'ipfs-http-client'
import { ethers, Transaction } from 'ethers'

import Web3Modal from 'web3modal'
import { infuraStorageId, infuraStorageSecret, infuraSubdomainKey } from '../configs'
import { nftAddress, nftMarketAddress } from '../configs/nftAddress'
import NFT from '../../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

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
type FormInput = {
  name: string
  description: string
  price: string
}

type CreateItem = {
  formInput: FormInput
  file: File
}

type CreateSale = {
  price: string
  url: string
}

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

export async function saveImage(file: File) {
  try {
    const added = await client.add(file, {
      progress: (prog) => console.log(`received: ${prog}`),
    })
    console.log('added', added)
    const url = `https://${infuraSubdomainKey}.infura-ipfs.io/ipfs/${added.path}`
    console.log('url', url)
    return url
  } catch (error: any) {
    console.log('Error uploading file: ', error)
    throw new Error(error)
  }
}

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
    // const url = `https://ipfs.io/ipfs/${added.path}`
    /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    const transaction = await createSale({ price, url })
    return transaction
  } catch (error: any) {
    console.log('Error uploading file: ', error)
    throw new Error(error)
  }
}

export async function getImage(asd: string) {
  const key = 'QmfVauVv81g3fqYiiMTKANK9isgHV8kEaMhSALsDV1cVrF'
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
