const Cd = require('../../models/cd.model');

exports.create = cdData => {
    const cd = new Cd(cdData);
    return cd.save();
};

exports.findAll = () => Cd.find().populate('posts');

exports.findOne = id => Cd.findById(id).populate('posts');

exports.update = (id, updateData) => Cd.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Cd.findByIdAndRemove(id);
