var browserSync = require('browser-sync');
var config = require('../../config');
var getPath = require('../util/getPath');

module.exports = function(grunt) {
    'use strict';

    var browsersync;

    grunt.registerTask('browsersync', function() {
        var done = this.async();

        browsersync = browserSync.init({
            server: {
                baseDir: getPath('dest'),
                middleware: require('../../deploy/config/express')()
            },
            port: config.browserPort,
            ui: {
                port: config.UIPort
            },
            ghostMode: {
                links: false
            }
        }, function () {
            done();
        });
    });

    grunt.registerTask('browsersync-reload', function() {
        browsersync.reload();
    });
};
