require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/c73a1157b70f4007b123978114f2e76b" ,
      accounts: ["d80b780e63ecd25dcef5b1c0e46cd8730fd0e47c9400d0957cd45f2c9432566b"],
    },
  },
  solidity: "0.8.17",
};
