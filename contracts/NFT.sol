// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
	// Counter is used to keep track of the number of NFTs minted
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

	address contractAddress;

	constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
		contractAddress = marketplaceAddress;
	}

	function createToken(string memory tokenURI) public returns (uint) {
		// Increment the counter
		_tokenIds.increment();

		// Get the current count
		uint256 newItemId = _tokenIds.current();

		// Mint the NFT
		_mint(msg.sender, newItemId);

		// Set the token URI from ERC721URIStorage
		_setTokenURI(newItemId, tokenURI);

		// Approve the marketplace contract to transfer the NFT
		setApprovalForAll(contractAddress, true);

		// Return the new token ID to the frontend
		return newItemId;
	}

}



