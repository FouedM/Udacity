# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Let's start :

1/ npm install or yarn to install our dependencies.

2/ truffle compile then truffle migrate --reset --network rinkeby

3/ truffle test to run the tests

# Contract Address

0x37D337a9b968ea945A794AFe262f831508945AD7

#OpenSea link (Store Azmour (Olive in the old greece) and symbol Zitoun (olive in arabic))
https://rinkeby.opensea.io/storefront/azmour?search=%7B%22sortAscending%22%3Afalse%2C%22sortBy%22%3A%22LISTING_DATE%22%2C%22editor%22%3A%7B%22address%22%3A%220xd3d2398e1fe3728de74bc8dc7711043da98abf6a%22%7D%7D

# ABI

[
{
"constant": true,
"inputs": [
{
"name": "interfaceId",
"type": "bytes4"
}
],
"name": "supportsInterface",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "getApproved",
"outputs": [
{
"name": "",
"type": "address"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "to",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "approve",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getSymbol",
"outputs": [
{
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "isPaused",
"type": "bool"
}
],
"name": "setPaused",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getName",
"outputs": [
{
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "totalSupply",
"outputs": [
{
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "from",
"type": "address"
},
{
"name": "to",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "transferFrom",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_myid",
"type": "bytes32"
},
{
"name": "_result",
"type": "string"
}
],
"name": "**callback",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "owner",
"type": "address"
},
{
"name": "index",
"type": "uint256"
}
],
"name": "tokenOfOwnerByIndex",
"outputs": [
{
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_myid",
"type": "bytes32"
},
{
"name": "_result",
"type": "string"
},
{
"name": "_proof",
"type": "bytes"
}
],
"name": "**callback",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "to",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "mint",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "from",
"type": "address"
},
{
"name": "to",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "safeTransferFrom",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "index",
"type": "uint256"
}
],
"name": "tokenByIndex",
"outputs": [
{
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "a",
"type": "uint256[2]"
},
{
"name": "b",
"type": "uint256[2][2]"
},
{
"name": "c",
"type": "uint256[2]"
},
{
"name": "input",
"type": "uint256[2]"
}
],
"name": "verifyTx",
"outputs": [
{
"name": "r",
"type": "bool"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "ownerOf",
"outputs": [
{
"name": "",
"type": "address"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "owner",
"type": "address"
}
],
"name": "balanceOf",
"outputs": [
{
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getOwner",
"outputs": [
{
"name": "",
"type": "address"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "to",
"type": "address"
},
{
"name": "approved",
"type": "bool"
}
],
"name": "setApprovalForAll",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "from",
"type": "address"
},
{
"name": "to",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
},
{
"name": "_data",
"type": "bytes"
}
],
"name": "safeTransferFrom",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getBaseTokenURI",
"outputs": [
{
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "tokenId",
"type": "uint256"
}
],
"name": "tokenURI",
"outputs": [
{
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"name": "owner",
"type": "address"
},
{
"name": "operator",
"type": "address"
}
],
"name": "isApprovedForAll",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "newOwner",
"type": "address"
}
],
"name": "transferOwnership",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"name": "owner",
"type": "address"
},
{
"indexed": false,
"name": "tokenId",
"type": "uint256"
}
],
"name": "AddSolution",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"name": "s",
"type": "string"
}
],
"name": "Verified",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "from",
"type": "address"
},
{
"indexed": true,
"name": "to",
"type": "address"
},
{
"indexed": true,
"name": "tokenId",
"type": "uint256"
}
],
"name": "Transfer",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "owner",
"type": "address"
},
{
"indexed": true,
"name": "approved",
"type": "address"
},
{
"indexed": true,
"name": "tokenId",
"type": "uint256"
}
],
"name": "Approval",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "owner",
"type": "address"
},
{
"indexed": true,
"name": "operator",
"type": "address"
},
{
"indexed": false,
"name": "approved",
"type": "bool"
}
],
"name": "ApprovalForAll",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "account",
"type": "address"
}
],
"name": "Paused",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "account",
"type": "address"
}
],
"name": "Unpaused",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "owner",
"type": "address"
},
{
"indexed": true,
"name": "newOwner",
"type": "address"
}
],
"name": "TransferOwnership",
"type": "event"
},
{
"constant": false,
"inputs": [
{
"name": "owner",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
},
{
"name": "unique",
"type": "bytes32"
}
],
"name": "addUniqueSolution",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "owner",
"type": "address"
},
{
"name": "tokenId",
"type": "uint256"
},
{
"name": "a",
"type": "uint256[2]"
},
{
"name": "b",
"type": "uint256[2][2]"
},
{
"name": "c",
"type": "uint256[2]"
},
{
"name": "input",
"type": "uint256[2]"
}
],
"name": "mintNFT",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
}
]

# Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
