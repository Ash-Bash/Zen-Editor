var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

/*module.exports = {
  entry: "./src/main.ts",
  output: {
    path: __dirname + "/src",
    filename: "main.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  externals: [
      (function() {
          var IGNORES = [
              'electron'
          ];
          return function(context, request, callback) {
              if (IGNORES.indexOf(request) >= 0) {
                  return callback(null, "require('" + request + "')");
              }
              return callback();
          }
      })()
  ]
};*/

module.exports = {
  context: __dirname + "/src",
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./scripts/app.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader'],
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ],
          plugins: [
            'react-html-attrs',
            'transform-es2015-arrow-functions',
            'transform-es2015-classes',
            'transform-es2015-destructuring',
            'transform-es2015-modules-commonjs',
            'transform-es2015-object-super',
            'transform-class-properties',
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  output: {
    path: __dirname + "/src/scripts",
    filename: "app.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
};
