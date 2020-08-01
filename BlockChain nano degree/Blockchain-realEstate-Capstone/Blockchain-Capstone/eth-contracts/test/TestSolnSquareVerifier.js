const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const proofs = require("../../zokrates/code/square/proof");

contract("SolnSquareVerifier", (accounts) => {
  const account_one = accounts[0];
  beforeEach(async function () {
    this.contract = await SolnSquareVerifier.new({ from: account_one });
  });

  // Test if a new solution can be added for contract - SolnSquareVerifier
  it("Should add a new solution", async function () {
    const res = await this.contract.mintNFT.call(
      account_one,
      1,
      proofs.proof.a,
      proofs.proof.b,
      proofs.proof.c,
      proofs.inputs
    );

    assert.equal(res, true, "Error : Solution can't be added");
  });

  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it("Should mint new token", async function () {
    const res = await this.contract.mint.call(account_one, 99);

    assert.equal(res, true, "Error : Unable to mint token");
  });
});
