const Bookmark = artifacts.require('Bookmark')
const assert = require('assert')

contract('Bookmark', accounts => {
    const MeMyselfAndI = {
        "title": "Me, Myself & I",
        "img": "http://static.tvmaze.com/uploads/images/original_untouched/127/319519.jpg"
    }

    const TheGifted = {
        "title": "The Gifted",
        "img": "http://static.tvmaze.com/uploads/images/original_untouched/121/303442.jpg"
    }

    it('should get Bootmark when blockchain has one show', () =>{
        Bookmark.deployed()
        .then(instance => {
            instance.bookmark(JSON.stringify(MeMyselfAndI), {from: accounts[0]})
            return instance.getBookmarks.call()
        })
        .then(bookmark => {
            assert.isEqual(bookmark, JSON.stringify(MeMyselfAndI))
        })
    })

    it('should get Bookmarks when 2 or more shows have been added', () =>{
        Bookmark.deployed()
        .then(instance => {
            instance.bookmark(JSON.stringify([MeMyselfAndI, TheGifted]), {from: accounts[0]})
            return instance.getBookmarks.call()
        })
        .then(bookmark => {
            assert.isEqual(bookmark, JSON.stringify([MeMyselfAndI, TheGifted]))
        })
    })
})