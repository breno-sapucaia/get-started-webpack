const webpack = require('webpack')
// ExtractTextPlugin foi adicionado no ex.10


module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    },
  },
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}