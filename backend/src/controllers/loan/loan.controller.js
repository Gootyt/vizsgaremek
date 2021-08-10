const express = require('express');
const createError = require('http-errors');

const loanService = require('./loan.service');
const loanModel = require('../../models/loan.model');
const loanService = baseService(loanModel, ['user', 'book']);

const checkModel = (model, body, next) => {
    const validationErrors = new model(body).validateSync();
    if (validationErrors) {
        next(
            new createError.BadRequest(
                JSON.stringify({
                    message: 'Scmema validation error',
                    error: validationErrors
                })
            )
        );
        return false;
    }
    return true;
};

// Create a new loan.
exports.create = (req, res, next) => {
    if (!checkModel(loanModel, req.body, next)) {
        return;
    }
    const { user, book} = req.body;

    const newLoan = {
        user, book: book || ''
    };

    return loanService.create(newLoan)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return loanService.findAll()
        .then( loans => {
            res.json(loans);
        });
};

exports.findOne = (req, res, next) => {
    return loanService.findOne(req.params.id)
        .then( loan => {
            if (!loan) {
                return next(new createError.NotFound("Loan is not found"));
            }
            return res.json(loan);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    if (!checkModel(loanModel, req.body, next)) {
        return;
    }

    return loanService.update(req.params.id, req.body)
        .then(loan => {
            res.json(loan);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return loanService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
}; 