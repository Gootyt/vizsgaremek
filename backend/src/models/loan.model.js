const mongoose = require('mongoose');

const LoanSchema = mongoose.Schema({
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    loanedbook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    loandate: {
        type: Date,
        default: new Date(),
    },
    loanend: {
        type: Date,
        default: new Date(),
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Loan', LoanSchema);
