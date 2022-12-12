const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title required'],
    },
    author: {
        type: String,
        required: [true, 'Author required']
    },
    language: {
        type: String,
        required: [true, 'Language required']
    }, 
    description: {
        type: String,
        required: [true, 'Description required']
    },
    price: {
        type: Number,
        required: [true, 'Price required']
    },
    availability: {
        type: Number,
        required: [true, 'Availability required']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL required']
    },
    postCreator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;