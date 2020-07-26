var CustomERC721Token = artifacts.require("CustomERC721Token");

contract("TestERC721Mintable", (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];
  const URI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
  const TOTAL_SUPPLY_COUNT = 10;

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      this.contract = await CustomERC721Token.new({ from: account_one });

      // TODO: mint multiple tokens
      for (let i = 0; i < TOTAL_SUPPLY_COUNT; i++) {
        await this.contract.mint(account_one, i);
      }
    });

    it("should return total supply", async function () {
      let totalSupply = await this.contract.totalSupply();

      assert(totalSupply, `Total supply must be ${TOTAL_SUPPLY_COUNT}`);
    });

    it("should get token balance", async function () {
      let balance = await this.contract.balanceOf(account_one);

      assert(
        balance,
        TOTAL_SUPPLY_COUNT,
        `Balance must be ${TOTAL_SUPPLY_COUNT}`
      );
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      const TOKEN_URI_1 = `${URI}1`;
      const TOKEN_URI_2 = `${URI}2`;
      let tokenUri1 = await this.contract.tokenURI(1);
      let tokenUri2 = await this.contract.tokenURI(2);
      assert(tokenUri1, TOKEN_URI_1, "URIS Are not equals");
      assert(tokenUri2, TOKEN_URI_2, "URIS Are not equals");
    });

    it("should transfer token from one owner to another", async function () {
      await this.contract.transferFrom(account_one, account_two, 1);

      const owner = await this.contract.ownerOf(1);

      assert(owner, account_two, "The ownership is not well transfered");
    });
  });

  describe("have ownership properties", function () {
    beforeEach(async function () {
      this.contract = await CustomERC721Token.new({ from: account_one });
    });

    it("should fail when minting when address is not contract owner", async function () {
      try {
        await this.contract.mint(account_two, 2);
      } catch (e) {
        assert.equal(e.reason, "Unauthorzied Caller");
      }
    });

    it("should return contract owner", async function () {
      const owner = await this.contract.getOwner();

      assert(owner, account_one, "Ownership problem");
    });
  });
});
