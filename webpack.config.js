const debug = process.env.NODE_ENV !== 'production';
//const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const fs  = require('fs');
const webpack = require('webpack');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));

module.exports = {
    entry: [ "babel-polyfill", "./src/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx', '.json' ]
    },
    devtool: debug ? false : false,
    context: __dirname,
    devServer: {
        contentBase: path.join( __dirname, "dist"),
        historyApiFallback: true
    },  
    plugins: debug ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
    ],
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.less$/,
            use: [ {loader: "style-loader"}, {loader: "css-loader"}, {loader: "less-loader", options: {modifyVars: themeVariables, javascriptEnabled: true}} ]
            //loader: "style-loader!css-loader!less-loader"
        }
    ]
    }
};