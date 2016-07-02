module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('prod-css', [
        'sass:app_prod',
        'postcss:app_prod'
    ]);
};
