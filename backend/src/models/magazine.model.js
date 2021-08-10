const mongoose = require('mongoose');

const MagazineSchema = mongoose.Schema({
    title: String,
    year: Number,
    month: Number,
    description: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Magazine', MagazineSchema);
// _id: string = '';
//     title: string = '';
//     year: number = 0;
//     month: number = 0;
//     description: string = '';