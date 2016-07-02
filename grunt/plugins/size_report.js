var getPath = require('../util/getPath');

var setOptions = function(isLibs) {
    'use strict';

    var fileName = isLibs ? 'vendor/libs.js' : 'main.js';

    var type = isLibs ? 'Libs' : 'App';

    var header = 'Size ' + type;

    return {
        options: {
            header: header
        },
        files: {
            list: [getPath('js', false, true) + fileName]
        }
    };
};

module.exports = {

    libs: setOptions(true),

    app: setOptions(false)
};
