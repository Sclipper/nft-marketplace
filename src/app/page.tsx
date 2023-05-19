'use client'

import * as React from 'react'
import { Grid, GridItem, Stack, Text } from '@chakra-ui/react'

import { ethers } from 'ethers'
import { nftAddress, nftMarketAddress } from './configs'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { ImageBox } from './components'
import { Stat } from './components/componentTypes'

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

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftMarketAddress, Market.abi, provider)

    const data = await marketContract.fetchMarketItems() // TODO: Type this
    console.log('data', data)

    const items: Item[] = await Promise.all(
      data.map(async (item: any) => {
        const tokenUri = await tokenContract.tokenURI(item.tokenId)
        console.log('tokenUri', tokenUri)
        const meta = await fetch(tokenUri).then((res) => res.json())

        console.log('meta', meta)
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
    console.log('items', items)
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
  const stats = [
    {
      key: 'items',
      type: 'number',
      value: 18100,
    },
    {
      key: 'owners',
      type: 'number',
      value: 12800,
    },
    {
      key: 'listed',
      type: 'percent',
      value: 0.9,
    },
    {
      key: 'floor',
      type: 'currency',
      currency: 'eth',
      value: 0.01,
    },
    {
      key: 'volume',
      type: 'currency',
      currency: 'eth',
      value: 528.6,
    },
  ] as Stat[]

  const featureProjects = [
    {
      image: {
        src: '/test.jpeg',
        alt: 'image',
      },
      thumbnail: {
        src: '/test_child.jpeg',
        alt: 'image',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      title: 'Collection 1',
      stats,
    },
    {
      image: {
        src: '/test.jpeg',
        alt: 'image',
      },
      thumbnail: {
        src: '/test_child.jpeg',
        alt: 'image',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      title: 'Collection 2',
      stats,
    },
    {
      image: {
        src: '/test.jpeg',
        alt: 'image',
      },
      thumbnail: {
        src: '/test_child.jpeg',
        alt: 'image',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      title: 'Collection 3',
      stats,
    },
  ]
  return (
    <Stack sx={{ width: '100%', alignItems: 'center', my: 14 }}>
      <Stack sx={{ maxWidth: ['95%', '90%', '73%'] }}>
        <Text sx={{ fontSize: '2xl', fontWeight: 'bold' }}>Featured Projects</Text>
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          {/* {featureProjects.map((project) => (
            <GridItem key={project.title}>
              <ImageBox
                image={project.image}
                thumbnail={project.thumbnail}
                text={project.text}
                stats={project.stats}
                title={project.title}
              />
            </GridItem>
          ))} */}
        </Grid>
      </Stack>
    </Stack>
  )
}
