var ZITZITOUNA = artifacts.require("ZITZITOUNA");

contract("TEST ZITZITOUNA", (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  const URI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
  const TOTAL_SUPPLY_COUNT = 10;

  describe("ZITZITOUNA erc721 contract", function () {
    beforeEach(async function () {
      this.contract = await ZITZITOUNA.new({ from: account_one });

      // TODO: mint multiple tokens
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(async (i) => {
        await this.contract.mint(account_one, i);
      });
    });

    it("Should return total supply", async function () {
      const totalSupply = await this.contract.totalSupply();

      assert.equal(
        totalSupply,
        TOTAL_SUPPLY_COUNT,
        `Error : Total supply must be ${TOTAL_SUPPLY_COUNT}`
      );
    });

    it("Should get token balance", async function () {
      const balance_one = await this.contract.balanceOf(account_one);
      const balance_two = await this.contract.balanceOf(account_two);

      assert.equal(
        balance_one,
        TOTAL_SUPPLY_COUNT,
        `Error : Balance of account one must be ${TOTAL_SUPPLY_COUNT}`
      );

      assert.notEqual(
        balance_two,
        TOTAL_SUPPLY_COUNT,
        `Error : Balance of account two must be ${TOTAL_SUPPLY_COUNT}`
      );
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("Should return token uri", async function () {
      [1, 2].forEach(async (i) => {
        assert.equal(
          await this.contract.tokenURI(i),
          `${URI}${i}`,
          `Error : Invalid token URI ${i}`
        );

        assert.notEqual(
          await this.contract.tokenURI(i + 1),
          `${URI}${i}`,
          `Error : Invalid token URI ${i + 1}`
        );
      });
    });

    it("should transfer token from one owner to another", async function () {
      await this.contract.transferFrom(account_one, account_two, 5);
      assert.equal(
        await this.contract.ownerOf(5),
        account_two,
        "Error : The ownership is not well transfered"
      );

      assert.notEqual(
        await this.contract.ownerOf(5),
        account_one,
        "Error : The ownership is not well transfered"
      );
    });
  });

  describe("Test Ownership", function () {
    beforeEach(async function () {
      this.contract = await ZITZITOUNA.new({ from: account_one });
    });

    it("Should fail when minting when address is not contract owner", async function () {
      try {
        await this.contract.mint(account_two, 2);
      } catch (error) {
        assert.equal(
          error.reason,
          "Error : The caller must be the contract owner"
        );
      }
    });

    it("Should return contract owner", async function () {
      const owner = await this.contract.getOwner();
      assert.equal(owner, account_one, "Error : Invalid contract owner");
      assert.notEqual(owner, account_two, "Error : Invalid contract owner");
    });
  });
});
