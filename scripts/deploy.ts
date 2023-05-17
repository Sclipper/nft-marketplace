const hre = require('hardhat')
const fs = require('fs')

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarket')
  const nftMarket = await NFTMarketplace.deploy()
  await nftMarket.deployed()
  console.log('NFTMarket deployed to:', nftMarket.address)

  const NFT = await hre.ethers.getContractFactory('NFT')
  const nft = await NFT.deploy(nftMarket.address)
  await nft.deployed()
  console.log('NFT deployed to:', nft.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
