const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    bookPublished: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['enable', 'disable'],
        default: 'enable'
    }
})

const books = mongoose.model('books', BookSchema)

module.exports = books;