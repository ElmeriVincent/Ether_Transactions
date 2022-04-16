require("dotenv").config();
import '@nomiclabs/hardhat-waffle';

export const solidity = '0.8.0';
export const networks = {
  ropsten: {
    url: 'https://eth-ropsten.alchemyapi.io/v2/lIhgFsebsWPCe5J-sUXNU07ewAV4NEwT',
    accounts: process.env.ACCOUNTS,
  },
};