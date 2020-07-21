const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "9e54aa50a53c454dbf9c8c270a6597c4";

const fs = require("fs");
let phrase = fs
  .readFileSync("/Users/melkifoued/etheruim/metamaskSeed.json")
  .toString();

phrase = JSON.parse(phrase);
const mnemonic = phrase.seed;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: "*", // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.1", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
