'use strict';

exports.hashnatorGenerator = function() {
  // eslint-disable-next-line max-len
  return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 4);
};
