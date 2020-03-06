'use strict';

const apiRoute = require('./apis');
// const errorRoute = require('./error');

function init(server) {
  server.get('*', function(req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  server.use('/api', apiRoute);
  // server.use('/error', errorRoute);
}

module.exports = {
  init: init,
};
