const express = require('express')

const router = express.Router();

const Book = require('../models/book.model')
const today = new Date().toISOString();
router.post('/addbook', async (req, res) => {
    try {
        const newBook = new Book({
            bookName: req.body.bookName,
            bookAuthor: req.body.bookAuthor,
            bookPrice: req.body.bookPrice,
            bookPublished: today,
        })

        const saveBook = await newBook.save()
        res.json(saveBook)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router

