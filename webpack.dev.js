const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: './src/index.js',
  output: {
    // [contentHash] to avoid file getting cached on user's computer and potentially not loading most current version
    filename: 'dist/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // builds updates HTML file with new JS file name when it changes
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects styles into dom
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  }
};