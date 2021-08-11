const Loan = require('../../models/loan.model');

exports.create = loanData => {
    const loan = new Loan(loanData);
    return loan.save();
};

exports.findAll = () => Loan.find().populate('user', 'books');

exports.findOne = id => Loan.findById(id).populate('user', 'books');

exports.update = (id, updateData) => Loan.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Loan.findByIdAndRemove(id);
