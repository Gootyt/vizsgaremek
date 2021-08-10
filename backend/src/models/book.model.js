const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    writer: String,
    title: String,
    length: Number,
    style: String,
    onloan: Boolean,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
// _id: string = '';
//     writer: string = '';
//     title: string = '';
//     length: number = 0;
//     style: string = '';
//     onloan: boolean = false