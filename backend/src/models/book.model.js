const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    writer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    style: {
      type: String,
    },
    onloan: {
      type: Boolean,
      default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);

/*
export class Book {
  _id: string = '';
    writer: string = '';
    title: string = '';
    length: number = 0;
    style: string = '';
    onloan: boolean = false;
}
*/