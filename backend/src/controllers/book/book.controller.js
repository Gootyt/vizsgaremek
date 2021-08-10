const express = require('express');
const createError = require('http-errors');

const bookService = require('./book.service');

exports.create = (req, res, next) => {
    const { writer, title} = req.body;
    if (!writer || title) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newBook = {
       writer, title, length: length || 0, style: style || '', onloan: true || false
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
    const { writer, title} = req.body;
    if (!writer || title) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return bookService.update(req.params.id, req.body)
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
