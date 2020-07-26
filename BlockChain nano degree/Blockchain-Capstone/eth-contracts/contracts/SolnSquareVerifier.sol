pragma solidity >=0.4.21 <0.6.2;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import './ERC721Mintable.sol';
import './verifier.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token, Verifier {
    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 tokenId;
        address owner;
    }

    // TODO define an array of the above struct
    Solution[] solutionsArray;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event AddSolution(address owner, uint256 tokenId);

    // TODO Create a function to add the solutions to the array and emit the event
    function addUniqueSolution(address owner, uint256 tokenId, bytes32 unique) public {
        require(uniqueSolutions[unique].owner == address(0), 'Existed Solution');
        uniqueSolutions[unique] = Solution({tokenId: tokenId, owner: owner});
        emit AddSolution(owner, tokenId);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNFT(address owner, uint256 tokenId,
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input) public onlyOwner() returns(bool) {

        bool valid = super.verifyTx(a, b, c, input);
        require(valid, 'Invalid Solution!');

        bytes32 unique = keccak256(abi.encodePacked(a, b, c, input));
        addUniqueSolution(owner, tokenId, unique);

        super.mint(owner, tokenId);
        return true;
    }
}