const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundlehui.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'index.html',
            template: './src/dr.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio',
            filename: 'portfolio.html',
            template: './src/portfolio.html'
        }),
        new HtmlWebpackPlugin({
            title: 'HomeU',
            filename: 'drUcr.html',
            template: './src/drU.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
