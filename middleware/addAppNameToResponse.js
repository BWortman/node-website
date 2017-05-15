'use strict';

const config = require('../config');

function addAppNameToResponse(app) {
  app.use((req, res, next) => {
    res.locals.appName = config.appName;
    next();
  });
};

module.exports = addAppNameToResponse;
