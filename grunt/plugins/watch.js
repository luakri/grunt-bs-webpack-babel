var getPath = require('../util/getPath');

module.exports = {
    options: {
        spawn: false,
    },

    app_sass: {
        files: [getPath('sass', true) + '**/*.scss'],
        tasks: ['dev-css', 'browsersync-reload']
    },

    libs: {
        files: [getPath('js', 'common', true) + 'vendor/**/*.js'],
        tasks: ['concat:libs','browsersync-reload']
    },

    app_html: {
        files: [getPath('src') + '*.html'],
        tasks: ['copy:app_html', 'browsersync-reload']
    }
};
