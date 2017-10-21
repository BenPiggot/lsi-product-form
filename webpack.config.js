const path = require("path");

module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'builder.js'
  },
  devServer: {
    publicPath: '/dist',
    historyApiFallback: true,
    contentBase: './'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}