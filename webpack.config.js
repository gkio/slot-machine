const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      "@Components": path.resolve(__dirname, 'src', 'components'),
    },
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: 'awesome-typescript-loader'
        },
      ],
      include: path.join(__dirname, 'src')
    },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false,
              },
            },
          ],
          publicPath: '../',
        })),
      },]
  },
  plugins: [
    new ExtractTextPlugin({filename: './styles/style.css', disable: false, allChunks: true}),
  ]
}
