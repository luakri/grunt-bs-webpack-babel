var express = require('express');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));
var isProd = (!argv.isProd) ? false : true;
// Additional param required since Webpack is built as Express Middleware.
var isBuild = (!argv.isBuild) ? false : true;

module.exports = function () {
    'use strict';

    var app = express();

    // Developer mode - add Webpack Middleware.
    if (!isProd || isBuild) {
        var webpack = require('./middlewares/webpack');
        var webpackBundle = webpack.bundle();

        app.use(webpackBundle.middleware);
        app.use(webpack.hotMiddleware(webpackBundle.compiler));
    }

    // File extensions middleware.
    app.use(require('./middlewares/extensions'));

    // Setting static folder
    app.use(express.static(path.resolve('./dist')));

    return app;
};
