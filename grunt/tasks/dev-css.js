module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('dev-css', [
        'sass:app_dev',
        'postcss:app_dev'
    ]);
};
