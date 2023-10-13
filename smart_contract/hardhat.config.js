// O8 - y3RQq9c - GEBCeLZIuDiFIblNPIHiG
// https://eth-sepolia.g.alchemy.com/v2/O8-y3RQq9c-GEBCeLZIuDiFIblNPIHiG

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/O8-y3RQq9c-GEBCeLZIuDiFIblNPIHiG',
      accounts: [ '9defb288876b80e63595a141fd0a4c17f94f616b8863e1853382c830c3913323' ]
    }
  }
};
