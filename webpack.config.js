const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    "master" : "/src/master.ts",
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { 
        test: /\.(ts|js)x?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ ,
        options: {
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
};