const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

router.post('/addbook', async (req, res) => {
    try {
        const newBook = new Book({
            bookName: req.body.bookName,
            bookAuthor: req.body.bookAuthor,
            bookPrice: req.body.bookPrice,
            // bookPublished: new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            bookPublished: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
        });

        const savedBook = await newBook.save();
        res.json(savedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error adding book' });
    }
});

module.exports = router;
