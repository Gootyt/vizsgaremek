const Magazine = require('../../models/magazine.model');

exports.create = magazineData => {
    const magazine = new Magazine(magazineData);
    return magazine.save();
};

exports.findAll = () => Magazine.find().populate();

exports.findOne = id => Magazine.findById(id).populate();

exports.update = (id, updateData) => Magazine.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Magazine.findByIdAndRemove(id);
