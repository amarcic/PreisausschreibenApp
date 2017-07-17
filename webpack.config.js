const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx', '.json' ]
    },
    devtool: "source-map",
    context: __dirname,
    devServer: {
        contentBase: path.join( __dirname, "dist")
    },  
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
        
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};