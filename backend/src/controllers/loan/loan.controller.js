const express = require('express');
const createError = require('http-errors');

const loanService = require('./loan.service');

// Create a new loan.
exports.create = (req, res, next) => {
    const { borrower, loanedbook, loandate, loanend } = req.body;
    if (!borrower || !loanedbook) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newLoan = {
        borrower: borrower,
        loanedbook: loanedbook,
        loandate: loandate,
	loanend: loanend
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
        .then( people => {
            res.json(people);
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
    const { borrower, loanedbook, loandate, loanend } = req.body;
    if (!borrower || !loanedbook) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        borrower: borrower,
        loanedbook: loanedbook,
        loandate: loandate,
	loanend: loanend
    };
    return loanService.update(req.params.id, update)
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
