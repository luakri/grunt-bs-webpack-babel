var express = require('express');
var path = require('path');

module.exports = function () {
    'use strict';

    var app = express();

    // File extensions middleware.
    require('./middlewares/extensions')(app);

    // Setting static folder
    app.use(express.static(path.resolve('./dist')));

    return app;
};
