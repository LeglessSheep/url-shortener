'use strict';

const urlController = require('../../controllers/apis/url');

const express = require('express');

let router = express.Router();

router.use('/', urlController);

module.exports = router;
