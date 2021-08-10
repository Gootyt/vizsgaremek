const express = require('express');
const createError = require('http-errors');

const cdService = require('./cd.service');

// performer: String,
//     title: String,
//     length: Number,
//     style: String,

// Create a new cd.
exports.create = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newCd = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return cdService.create(newCd)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return cdService.findAll()
        .then( people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return cdService.findOne(req.params.id)
        .then( cd => {
            if (!cd) {
                return next(new createError.NotFound("Cd is not found"));
            }
            return res.json(cd);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };
    return cdService.update(req.params.id, update)
        .then(cd => {
            res.json(cd);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return cdService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
