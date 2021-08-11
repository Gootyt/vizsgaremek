const express = require('express');
const createError = require('http-errors');

const bookService = require('./book.service');

// Create a new book.
exports.create = (req, res, next) => {
    const { writer, title, length, style, onloan } = req.body;
    if (!writer || !title || !length || !onloan) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newBook = {
        writer: writer,
        title: title,
        length: length,
        style: style,
        onloan: onloan,
    };

    return bookService.create(newBook)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return bookService.findAll()
        .then( books => {
            res.json(books);
        });
};

exports.findOne = (req, res, next) => {
    return bookService.findOne(req.params.id)
        .then( book => {
            if (!book) {
                return next(new createError.NotFound("Book is not found"));
            }
            return res.json(book);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { writer, title, length, style, onloan } = req.body;
    if (!writer || !title || !length || !onloan) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        writer: writer,
        title: title,
        length: length,
        style: style,
        onloan: onloan,
    };
    return bookService.update(req.params.id, update)
        .then(book => {
            res.json(book);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return bookService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
