// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Bookmark {
    mapping (address => string) private bookmarks;
    address public owner;

    function onlyOwner() private {
        owner = msg.sender;
    }

    function bookmark(string memory show) public returns(string memory){
        bookmarks[msg.sender] = show;
        return bookmarks[msg.sender];
    }

    function getBookmarks() public view returns (string memory){
        return bookmarks[msg.sender];
    }
}