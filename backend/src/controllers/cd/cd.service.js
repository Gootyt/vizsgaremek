const express = require("express");
const controller = require('./cd.controller');

exports.create = cdData => {
    const cd = new Cd(cdData);
    return cd.save();
};

exports.findAll = () => Cd.find().populate();

exports.findOne = id => Cd.findById(id).populate();

exports.update = (id, updateData) => Cd.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Cd.findByIdAndRemove(id);
