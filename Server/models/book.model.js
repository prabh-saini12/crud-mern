const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    bookAuthor: {
        type: String,
        require: true
    },
    bookPrice: {
        type: Number,
        require: true
    },
    bookPublished: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        enum: ['enable', 'disable'],
        default: 'enable'
    }
})

const books = mongoose.model('books', BookSchema)

module.exports = books;