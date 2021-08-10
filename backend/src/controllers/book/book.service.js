const Book = require('../../models/book.model');

exports.create = bookData => {
    const book = new Book(bookData);
    return book.save();
};

exports.findAll = () => Book.find().populate('posts');

exports.findOne = id => Book.findById(id).populate('posts');

exports.update = (id, updateData) => Book.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Book.findByIdAndRemove(id);
