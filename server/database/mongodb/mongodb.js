'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports.urlSchema = mongoose.model('Smartphone', new Schema({
  hashkey: {type: String, required: true, max: 5},
  url: {type: String, required: true},
}));
