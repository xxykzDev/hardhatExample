require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
 networks: {
  truffle: {
   url: "http://localhost:24012/rpc",
   timeout: 60000,
  },
  polygon_mumbai: {
   url: "https://rpc-mumbai.maticvigil.com",
   accounts: [process.env.PRIVATE_KEY],
  },
 },
 etherscan: {
  apiKey: "ECBT1YHDN3X5BEYVKS3BC5KV7FTEZUR3FH",
 },
 solidity: {
  version: "0.8.9",
  settings: {
   optimizer: {
    enabled: true,
    runs: 200,
   },
  },
 },
};
