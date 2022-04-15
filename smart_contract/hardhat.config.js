require("dotenv").config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/lIhgFsebsWPCe5J-sUXNU07ewAV4NEwT',
      accounts: process.env.ACCOUNTS,
    },
  },
};