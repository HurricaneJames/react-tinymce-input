module.exports = {
  entry: {
    tiny: './examples/Tiny.js'
  },
  output: {
      filename: '[name].bundle.js',
      publicPath: 'http://localhost:8090/assets',
      sourceMapFilename: '[name].bundle.map'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional[]=runtime'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
