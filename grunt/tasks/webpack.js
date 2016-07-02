var webpack = require('webpack');
var webpackConfig = require('../../config/webpack.config');

module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('webpack', function() {
        var done = this.async();

        webpack(webpackConfig, function(err, stats) {
            if (err) {
                grunt.log.warn('webpack', err);
            }

            grunt.log.ok('[webpack]');

            grunt.log.ok(stats.toString({
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }));

            done();
        });
    });
};
