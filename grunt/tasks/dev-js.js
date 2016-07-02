module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('dev-js', [
        'js-lint',
        'concat',
        'modernizr'
    ]);
};
