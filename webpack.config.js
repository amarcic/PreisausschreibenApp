const debug = process.env.NODE_ENV !== 'production';
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx', '.json' ]
    },
    devtool: debug ? "inline-sourcemap": false,
    context: __dirname,
    devServer: {
        contentBase: path.join( __dirname, "dist")
    },  
    plugins: debug ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
    ],
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
    ]
    }
};