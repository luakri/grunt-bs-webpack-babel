module.exports = function(grunt) {
    'use strict';

    var path = require('path');
    var timer = require('grunt-timer');
    var argv = require('minimist')(process.argv.slice(2));

    timer.init(grunt);
    global.isProd = (argv.isProd) ? true : false;

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/plugins'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                'notify_hooks': 'grunt-notify',
                'notify': 'grunt-notify'
            }
        },
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
};
