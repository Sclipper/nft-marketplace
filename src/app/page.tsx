'use client'

import * as React from 'react'
import { Stack, Text } from '@chakra-ui/react'

import { ethers } from 'ethers'

import { NftBox } from './components'
import { useGlobal } from './globalContext'

type Item = {
  price: string
  tokenId: number
  seller: string
  owner: string
  image: string
  name: string
  description: string
}
export default function Home() {
  const [nfts, setNfts] = React.useState<Item[]>([])
  const { state } = useGlobal()
  const { marketContract, tokenContract } = state

  const loadNFTs = async () => {
    // const provider = new ethers.providers.JsonRpcProvider()
    // const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
    // const marketContract = new ethers.Contract(nftMarketAddress, Market.abi, provider)

    const data = await marketContract.fetchMarketItems() // TODO: Type this
    const items: Item[] = await Promise.all(
      data.map(async (item: any) => {
        const tokenUri = await tokenContract.tokenURI(item.tokenId)
        const meta = await fetch(tokenUri).then((res) => res.json())
        // .catch((err) => console.log('no meta', err))

        const price = ethers.utils.formatUnits(item.price.toString(), 'ether')
        const newItem = {
          price,
          tokenId: item.tokenId.toNumber(),
          seller: item.seller,
          owner: item.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        } as Item
        return newItem
      })
    )
    setNfts(items)
  }

  // const buyNft = async (nft) => {
  //   const web3Modal = new Web3Modal()
  //   const connection = await web3Modal.connect()
  //   const provider = new ethers.providers.Web3Provider(connection)

  //   const signer = provider.getSigner()
  //   const contract = new ethers.Contract(nftMarketAddress, Market.abi, signer)

  //   const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')

  //   const transaction = await contract.createMarketSale(nftAddress, nft.tokenId, {
  //     value: price,
  //   })

  //   await transaction.wait()
  //   loadNFTs()
  // }

  React.useEffect(() => {
    loadNFTs()
  }, [])

  console.log('nfts', nfts)
  return (
    <Stack sx={{ width: '100%', alignItems: 'center', my: 14 }}>
      <Stack sx={{ maxWidth: ['95%', '90%', '73%'] }}>
        {nfts.length === 0 ? (
          <Text sx={{ fontSize: '2xl', fontWeight: 'bold' }}>
            No items in marketplace yet. Please create an item.
          </Text>
        ) : (
          <Stack spacing={4} direction="row" flexWrap="wrap">
            {nfts?.map((item) => (
              <NftBox
                key={item.tokenId}
                id={item.tokenId}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
