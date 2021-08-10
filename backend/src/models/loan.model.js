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
    loandate: Date,
    loanend: Date,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Loan', LoanSchema);
// export class Loan {
//     _id: string = '';
//     borrower: User = new User();
//     loanedbook: Book = new Book();
//     loandate: Date = new Date();
//     loanend: Date = new Date();
