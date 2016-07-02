var getPath = require('../util/getPath');

module.exports = {

    all: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: getPath('dest'),
            src: '**/*.html',
            dest: getPath('dest')
        }]
    }
};
