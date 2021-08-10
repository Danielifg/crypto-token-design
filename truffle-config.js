require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraProjectId = process.env.INFURA_PROJECT_ID;

module.exports = {
  // contracts_build_directory: "./client/src/contracts/erc20",
  compilers:{
    solc:{
        version:"^0.8"
    }    
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 6000000,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.METAMASK_KEY, "https://ropsten.infura.io/v3/" + infuraProjectId),
      network_id: 3,       // Ropsten's id
      // from:"0x8B13f183e27AaD866b0d71F0CD17ca83A9a54ae2",
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },  
  plugins: [
    'truffle-plugin-verify'
  ],
    api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
