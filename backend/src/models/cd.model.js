const mongoose = require('mongoose');

const CdSchema = mongoose.Schema({
    performer: {
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
}, {
    timestamps: true
});

module.exports = mongoose.model('Cd', CdSchema);