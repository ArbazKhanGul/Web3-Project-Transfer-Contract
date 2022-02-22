require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KGFvNnL9smRBOFsDHk8z0-lWJ-PwtbmH',
      accounts: ["f2ea82d23f65f5d70d6e93802f4d064f2d2458ed944a7f3c9def45ac3a20f723"],
    },
  },
};