const express = require('express');
const createError = require('http-errors');

const magazineService = require('./magazine.service');

// Create a new magazine.
exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newMagazine = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return magazineService.create(newMagazine)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return magazineService.findAll()
        .then( magazines => {
            res.json(magazines);
        });
};

exports.findOne = (req, res, next) => {
    return magazineService.findOne(req.params.id)
        .then( magazine => {
            if (!magazine) {
                return next(new createError.NotFound("Magazine is not found"));
            }
            return res.json(magazine);
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
    return magazineService.update(req.params.id, update)
        .then(magazine => {
            res.json(magazine);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return magazineService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
