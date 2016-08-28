var getPath = require('../util/getPath');

module.exports = {
    options: {
        spawn: false,
    },

    app_sass: {
        files: [getPath('sass', true) + '**/*.scss'],
        tasks: ['dev-css']
    },

    libs: {
        files: [getPath('js', 'common', true) + 'vendor/**/*.js'],
        tasks: ['concat:libs']
    },

    app_html: {
        files: [getPath('src') + '*.html'],
        tasks: ['copy:app_html']
    }
};
