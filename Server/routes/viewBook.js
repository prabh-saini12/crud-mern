const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

router.get('/viewbook', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching books' });
  }
});

router.get('/viewbook/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching book by ID' });
  }
});

module.exports = router;
