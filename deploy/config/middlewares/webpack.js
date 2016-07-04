var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('../../../config/webpack.config');

var bundle = function() {
    var compiler = webpack(webpackConfig);
    var middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    return {
        middleware: middleware,
        compiler: compiler
    };
};

var hotMiddleware = function(compiler) {
    return webpackHotMiddleware(compiler);
};

module.exports = function(app) {
    var webpackBundle = bundle();

    app.use(webpackBundle.middleware);
    app.use(hotMiddleware(webpackBundle.compiler));
};
