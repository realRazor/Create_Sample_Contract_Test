require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: api_key ,
      accounts: [private_key],
    },
  },
  solidity: "0.8.17",
};
