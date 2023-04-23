'use client'

import * as React from 'react'
import { Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { nftAddress, nftMarketAddress } from './configs'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { ImageBox } from './components'

export default function Home() {
  const [nfts, setNfts] = React.useState([])

  // const loadNFTs = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider()
  //   const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
  //   const marketContract = new ethers.Contract(nftMarketAddress, Market.abi, provider)
  //   const data = await marketContract.fetchMarketItems()

  //   const items = await Promise.all(data.map(async (i) => {
  //     const tokenUri = await tokenContract.tokenURI(i.tokenId)
  //     const meta = await fetch(tokenUri).then((res) => res.json())
  //     const price = ethers.utils.formatUnits(i.price.toString(), 'ether')
  //     const item = {
  //       price,
  //       tokenId: i.tokenId.toNumber(),
  //       seller: i.seller,
  //       owner: i.owner,
  //       image: meta.image,
  //       name: meta.data.name,
  //       description: meta.data.description,
  //     }
  //     return item
  //   }))
  //   setNfts(items)
  //   console.log('items', items)
  // }

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

  // React.useEffect(() => {
  //   loadNFTs()
  // }, [])

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
      stats: {
        items: 1,
        owners: 1,
        listed: 1,
        floorPrice: 1,
      },
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
      title: 'Collection 1',
      stats: {
        items: 1,
        owners: 1,
        listed: 1,
        floorPrice: 1,
      },
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
      title: 'Collection 1',
      stats: {
        items: 1,
        owners: 1,
        listed: 1,
        floorPrice: 1,
      },
    },
  ]

  return (
    <Stack sx={{ width: '100%', alignItems: 'center', my: 14 }}>
      <Stack sx={{ maxWidth: '90%' }}>
        <Text sx={{ fontSize: '2xl', fontWeight: 'bold' }}>Featured Projects</Text>
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          {featureProjects.map((project) => (
            <GridItem key={project.title}>
              <ImageBox
                image={project.image}
                thumbnail={project.thumbnail}
                text={project.text}
                stats={project.stats}
                title={project.title}
              />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}
