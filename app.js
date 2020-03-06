'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const port = 3000;
const server = express();

// let routes = require('./server/routes');
let routes = require('./server/models/Urls');

// Server settings - Will config later
// server.set('env', config.env);
// server.set('port', config.port);
// server.set('hostname', config.hostname);
// server.set('viewDir', config.viewDir);

// Returns middleware that parses json
// server.use(cors());
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(logger('dev'));

// Set up routes
// routes.init(server);

let hostname = server.get('hostname');

server.listen(port, function() {
  console.log('Express server listening on - http://' + hostname + ':' + port);
});

server.get('/', (req, res) => res.send('Hello World2'));
server.get('/db', (req, res) => res.send(routes.createTable()));
server.get('/db-insert', (req, res) => res.send(routes.insertContent()));
server.get('/db-scan', (req, res) => res.send(routes.scanContent()));
server.get('/db-find', (req, res) => res.send(routes.findContent()));

// server.get('/db-scan', (req, res) => res.send(routes.scanContent()));
// server.listen(port);
