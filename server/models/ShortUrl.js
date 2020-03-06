'use strict';

module.exports = class ShortUrl {
  constructor(hash = '', url = '') {
    this.create(hash, url);
  }

  create(hash, url) {
    this.hash = this.isValidHash(hash) || null;
    this.url = this.isValidUrl(url || null);
  }

  isValidHash(hash) {
    return !!(hash && hash.match(/^[a-z0-9]{5}$/));
  }

  // No need to validate http, user can shorturl any url protocol
  isValidUrl(url) {
    // eslint-disable-next-line max-len
    return !!(url && url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/));
  }

  toReadableString() {
    return `${this.hash} - ${this.url}`;
  }
};
