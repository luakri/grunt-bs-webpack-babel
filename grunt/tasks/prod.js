module.exports = function(grunt) {
    'use strict';

    global.isProd = true;

    grunt.registerTask('prod', [
        'clean:build',
        'prod-css',
        'copy-assets',
        'prod-js',
        'htmlmin',
        'size_report'
    ]);
};
