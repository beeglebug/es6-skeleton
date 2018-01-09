const path = require('path')
const outputDirectory = path.resolve(__dirname, 'dist')
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules');
const baseUrl = '/'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: outputDirectory,
    publicPath: baseUrl
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: nodeModulesDirectory,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: outputDirectory
  }
}
