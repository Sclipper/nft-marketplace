require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.MUMBAI_INFURA_URL,
      accounts: [process.env.WALLET_KEY as string],
    },
    mainnet: {
      url: process.env.MAINNET_INFURA_URL,
      accounts: [process.env.WALLET_KEY as string],
    },
  },
  solidity: '0.8.17',
}
