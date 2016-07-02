module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('js-lint', [
        'jshint',
        'eslint',
        'jscs'
    ]);
};

