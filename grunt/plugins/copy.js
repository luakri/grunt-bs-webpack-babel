var getPath = require('../util/getPath');

module.exports = {

    options: {
        processContentExclude: ['.DS_Store', '.gitignore', '.sass-cache', 'node_modules']
    },

    app_images : {
        expand: true,
        cwd: getPath('img', true),
        src: '**/*',
        dest: getPath('img', false, true)
    },

    app_html: {
        files: [{
            expand: true,
            src: '**/*.html',
            cwd: getPath('src'),
            dest: getPath('dest')
        }]
    }
};
