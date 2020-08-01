pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
import './verifier.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract ZitZitounaVerifier is Verifier {}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ZITZITOUNA, Verifier {

// TODO define a solutions struct that can hold an index & an address
struct Solution {
    uint256 index;
    address _address;
}

// TODO define an array of the above struct
Solution[] solutions;

// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => Solution) private uniqueSolutions;

// TODO Create an event to emit when a solution is added
event AddSoulution(uint index, address _address);

//  - make sure the solution is unique (has not been used before)
modifier requireSolutionUnexist(bytes32 key) {
    require(uniqueSolutions[key]._address == address(0), 'Error : the requested solution exist already');
    _;
}

// TODO Create a function to add the solutions to the array and emit the event
function addSolution(uint256 index, address _address,  bytes32 key) public requireSolutionUnexist(key) {
    uniqueSolutions[key] = Solution({index: index, _address:_address});
    emit AddSoulution(index, _address);
}


modifier requireVerifiedSolution(  uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) {
    require(verifyTx(a, b, c, input), "Error : Incorrect proof");
    _;
}

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure you handle metadata as well as tokenSuplly
function mintNFT(address _address,
            uint256 index,
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input)
            public onlyOwner() requireVerifiedSolution(a, b, c, input) returns(bool){
                bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
                addSolution(index, _address, key);
                return super.mint(_address, index);
            }
}