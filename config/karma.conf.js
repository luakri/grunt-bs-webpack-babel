var config = require('./index');
var webpackConfig = require('./webpack.test.config');

var jsApp = config.PATHS.JS;
var processFiles = {};

processFiles['tests/unit/index.js'] = ['webpack'];
processFiles[jsApp + 'components/**/*.js'] = ['webpack'];
processFiles[jsApp + 'main.js'] = ['webpack'];

module.exports = function (config) {
    'use strict';

    config.set({
        basePath : '../src',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        keepalive: true,
        autoWatch : true,
        singleRun : false,

        port: 9876,
        runnerPort: 9100,
        colors: true,
        captureTimeout: 5000,

        reporters: ['spec', 'coverage'],

        preprocessors: processFiles,

        coverageReporter: {
            type : 'lcov',
            dir : '../reports/coverage'
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true
        },

        exclude: [],

        files: [
            // Libs.
            jsApp + 'vendor/jquery-2.2.1.js',
            jsApp + 'vendor/modernizr.min.js',

            // All the Tests.
            'tests/unit/index.js'
        ]
    });
};
