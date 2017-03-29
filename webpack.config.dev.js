import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// For basic usage, see: https://github.com/jantimon/html-webpack-plugin
export default {
  debug: true,
  // the way the code is being debugged: https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map', // use a keyword 'debugger;' (e.g. in index.js) to see the readable code
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index') // path package is used here to form the path
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
