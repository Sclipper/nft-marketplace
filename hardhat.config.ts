require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
      accounts: [process.env.NEXT_PUBLIC_WALLET_KEY as string],
    },
    mainnet: {
      url: `https://polygon-mainnert.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
      accounts: [process.env.NEXT_PUBLIC_WALLET_KEY as string],
    },
  },
  solidity: '0.8.17',
}
