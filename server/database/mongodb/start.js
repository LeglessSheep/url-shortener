'use strict';

const mongoose = require('mongoose');

const config = require('../../../config/database/mongodb.js');
console.log(config);
module.exports.createConnection = () => mongoose.connect(config.url,
  function(err, db) {
    if (err) console.log('error connecting to db');
    else console.log('Connected correctly to server');
  });
