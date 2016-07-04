var express = require('express');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));
var isProd = (!argv.isProd) ? false : true;

module.exports = function () {
    'use strict';

    var app = express();

    // Developer mode - add Webpack Middleware.
    if (!isProd) {
        require('./middlewares/webpack')(app);
    }

    // File extensions middleware.
    require('./middlewares/extensions')(app);

    // Setting static folder
    app.use(express.static(path.resolve('./dist')));

    return app;
};
