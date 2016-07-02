var getPath = require('../util/getPath');

var optionsDev = {
    style: 'expanded'
};

var optionsProd = {
    outputStyle: 'compressed'
};

var setOptions = function(isProd) {
    'use strict';

    var SASS_FILE_MAP = {};

    SASS_FILE_MAP[getPath('css', false, true) + 'main.css'] = getPath('sass', true) + 'main.scss';

    return {
        options: (isProd) ? optionsProd : optionsDev,
        files: SASS_FILE_MAP
    };
};

module.exports = {

    app_dev: setOptions(false),

    app_prod: setOptions(true)
};
