var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var isProd = (!argv.isProd) ? false : true;

var oneDay = 86400000;

var manageExtensions = function(request, response, next) {

    if (request.method === 'GET') {

        var requestUrl = request._parsedUrl.pathname;
        var extname;
        var mimeTypes = {
            'htm': 'text/html',
            'html': 'text/html',
            'jpeg': 'image/jpeg',
            'jpg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'js': 'text/javascript',
            'css': 'text/css',
            'mp4': 'video/mp4',
            'mp3': 'video/mp3',
            'eot': 'application/vnd.ms-fontobject',
            'ttf': 'application/font-sfnt',
            'svg': 'image/svg+xml',
            'woff': 'application/font-woff',
            'map': 'application/json',
            'json': 'application/json',
            'ico': 'image/x-icon'
        };

        // Default endpoint.
        if (requestUrl === '/') {
            requestUrl = '/index.html';
        }

        // Serve matching content types.
        extname = path.extname(requestUrl).substr(1);

        if (!mimeTypes[extname]) {

            // Go to next middleware if request has no extension.
            if (extname === '') {
                next();
            } else {
                //for now just send a 404 and a short message
                response.status(404).send('The requested file type is not supported\n');
            }
        } else {

            // Only cache assets for production.
            // Set request headers for assets cache.
            if (isProd &&
                !response.getHeader('Cache-Control')) {

                response.setHeader('Cache-Control', 'must-revalidate, max-age=' + oneDay);
                response.setHeader('Expires', new Date(Date.now() + oneDay).toUTCString());
            }

            next();
        }
    } else {
        next();
    }
};

module.exports = function(app) {
    app.use(manageExtensions);
};
