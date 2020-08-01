// migrating the appropriate contracts
var verifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
//var ZITZITOUNA = artifacts.require("ZITZITOUNA");

module.exports = function (deployer) {
  deployer.deploy(verifier);
  deployer.deploy(SolnSquareVerifier);
  //deployer.deploy(ZITZITOUNA);
};
