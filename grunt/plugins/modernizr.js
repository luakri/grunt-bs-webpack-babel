var getPath = require('../util/getPath');

module.exports = {

    common: {
        parseFiles: true,
        customTests: [],
        dest : getPath('js', false, true) + 'vendor/modernizr.min.js',
        options: [
            'prefixes',
            'prefixed',
            'prefixedCSS',
            'prefixedCSSValue',
            'setClasses'
        ],
        uglify: true,
        files : {
            src: [
                getPath('js',  true) + '**/*.js',
                '!' + getPath('js',  true) + 'vendor/**/*.js'
            ]
        },
        tests: [
            'touchevents'
        ]
    }
};
