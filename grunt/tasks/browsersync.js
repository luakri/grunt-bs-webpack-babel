var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('../../config/webpack.config');
var config = require('../../config');
var getPath = require('../util/getPath');

var argv = require('minimist')(process.argv.slice(2));
var isProd = (!argv.isProd) ? false : true;

module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('browsersync', function() {
        var done = this.async();
        var middlewares = [];

        middlewares.push(require('../../deploy/config/express')());

        // Developer mode - add Webpack Middleware.
        if (!isProd) {
            var compiler = webpack(webpackConfig);

            middlewares.push(webpackMiddleware(compiler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {
                    colors: true,
                    hash: false,
                    timings: true,
                    chunks: false,
                    chunkModules: false,
                    modules: false
                }
            }));

            middlewares.push(webpackHotMiddleware(compiler));
        }

        browserSync({
            server: {
                baseDir: getPath('dest'),
                middleware: middlewares
            },
            port: config.browserPort,
            ui: {
                port: config.UIPort
            },
            ghostMode: {
                links: false
            },
            files: [
                getPath('css', false, true) + '**/*.css',
                getPath('dest') + '**/*.html',
                getPath('js', false, true) + 'vendor/**/*.js'
            ]
        }, function () {
            done();
        });
    });
};
