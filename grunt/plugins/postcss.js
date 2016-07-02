var getPath = require('../util/getPath');

var setOptions = function(isProd) {
    'use strict';

    var props = {
        src: getPath('css', false, true) + 'main.css',
        options: {
            processors: [
                require('autoprefixer')({ browsers: ['> 1%', 'IE 9', 'iOS 8'] })
            ]
        }
    };

    if (!isProd) {
        props.options.map = {
            inline: true
        };
    }

    return props;
};

module.exports = {

    app_dev: setOptions(false),

    app_prod: setOptions(true)
};
