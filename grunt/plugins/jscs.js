var getPath = require('../util/getPath');

var setOptions = function() {
    'use strict';

    return [
        getPath('js', true) + '**/*.js',
        '!' + getPath('js', true) + 'vendor/**/*.js'
    ];
};

module.exports = {
    app: setOptions()
};
