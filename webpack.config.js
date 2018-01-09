const path = require('path')

const outputDirectory = path.resolve(__dirname, 'dist')
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputDirectory
  }
}
