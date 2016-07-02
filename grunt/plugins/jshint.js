var getPath = require('../util/getPath');

module.exports = {

    grunt: [
        'Gruntfile.js',
        getPath('grunt') + '**/*.js',
        getPath('deploy') + '**/*.js',
        getPath('config') + '**/*.js'
    ]
};
