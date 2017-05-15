﻿'use strict';

const config = require('../config');

function configure(app) {
  app.use(function errorHandler(err, req, res, next) {
    const status = err.status || 500;

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : 'Not available';
    res.locals.status = status;
    res.locals.appName = config.appName;
    res.locals.env = req.app.get('env');

    res.status(status);
    res.render('error/error');
  });
};

module.exports = configure;
