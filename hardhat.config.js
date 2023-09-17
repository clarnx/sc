require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/4anJnw7wfV4t2gmTNMapSOCB7eaT_ZHh",
      accounts: [`0x${process.env.DEPLOYER_KEY_ALCHEMY}`],
    },
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
