const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

router.delete('/deletebook/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error deleting book' });
    }
});

module.exports = router;
