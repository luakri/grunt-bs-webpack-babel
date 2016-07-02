module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('prod-js', [
        'concat',
        'webpack',
        'modernizr'
    ]);
};
