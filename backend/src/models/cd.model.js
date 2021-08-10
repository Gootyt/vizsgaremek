const mongoose = require('mongoose');

const CdSchema = mongoose.Schema({
    performer: String,
    title: String,
    length: Number,
    style: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cd', CdSchema);
// export class Cd {
//     _id: string = '';
//     performer: string = '';
//     title: string = '';
//     length: number = 0;
//     style: string = '';
// }