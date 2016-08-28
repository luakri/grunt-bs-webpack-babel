var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var chalk = require('chalk');

var getPath = require('../grunt/util/getPath');
var argv = require('minimist')(process.argv.slice(2));
var isProd = (!argv.isProd) ? false : true;

function root(arg) {
  return path.join(__dirname, '../' + arg);
}

var options = {
    devtool: 'eval',
    debug: true,
    entry: {
    app: [
        root(getPath('js', true) + 'main.js')
        ]
    },
    output: {
        path: root(getPath('js', false, true)),
        filename: 'main.js',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ProgressBarPlugin({
          format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
};

if (isProd) {

    options.devtool = false;
    options.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
            'drop_console': true
        }
    }));

} else {

    options.devtool = 'eval';
    options.entry.app.unshift('webpack-hot-middleware/client?reload=true');
    options.output.publicPath = '/app';
}

module.exports = options;
