var options = {
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }
    ]
  }
};

module.exports = options;
