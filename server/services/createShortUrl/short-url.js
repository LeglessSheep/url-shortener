'use strict';

const ShortUrl = require('../../models/ShortUrl');

const httpResponses = {
  onValidationError: {
    success: false,
    message: 'Please enter email and password.',
  },
  onShortUrlSaveError: {
    success: false,
    message: 'That email address already exists.',
  },
  onShortUrlSaveSuccess: {
    success: true,
    message: 'Successfully created new shorturl.',
  },
};

// Register new users
async function registerShortUrl(request, response) {
  let { urlToShorten } = request.body;
  let shortUrl = new ShortUrl();
  if (!shortUrl.isValidUrl(shortUrl)) {
    response.json(httpResponses.onValidationError);
  } else {

    let newShortUrl = new ShortUrl({
      // add content
    });

    // Attempt to save the user
    newShortUrl.save(error => {
      if (error) {
        return response.json(httpResponses.onShortUrlSaveError);
      }
      response.json(httpResponses.onShortUrlSaveSuccess);
    });
  }
}

module.exports = {
  registerShortUrl: registerShortUrl,
};
