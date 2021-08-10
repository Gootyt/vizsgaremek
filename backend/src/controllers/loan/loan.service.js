const Loan = require('../../models/loan.model');

exports.create = loanData => {
    const loan = new Loan(loanData);
    return loan.save();
};

exports.findAll = () => Loan.find().populate('user', 'book');

exports.findOne = id => Loan.findById(id).populate('user').populate('user', 'book');

exports.update = (id, updateData) => Loan.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Loan.findByIdAndRemove(id);
