const Book = require('../models/Book');

exports.create = (bookData) => Book.create(bookData);

exports.getAll = () => Book.find().lean();

exports.getOne = (bookId) => Book.findById(bookId).lean();

exports.update = (bookId, bookData) => Book.updateOne({ _id: bookId }, { $set: bookData });

exports.del = (bookId) => Book.deleteOne({ _id: bookId });
