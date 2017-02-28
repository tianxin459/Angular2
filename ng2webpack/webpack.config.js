const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app1: './src/app1/main.ts',
        app1: './src/app2/main.ts',
        // app2: './dist3/out-tsc/app2/main.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wpdist2')
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\\.html/, loader: 'html' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common'),
        // new HtmlWebpackPlugin({
        //     template: 'src/app1/index.html'
        // })
    ]
};