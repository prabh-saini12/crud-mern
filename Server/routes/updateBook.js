const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

router.put('/updatebook/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error updating book' });
    }
});

module.exports = router;
