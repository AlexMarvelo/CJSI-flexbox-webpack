var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: __dirname + '/scripts/app.js',
    output: {
        path: __dirname + '/build/',
        filename: "[name].bundle.js"
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
            {test: /\.sass$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'},
            {test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
            {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
            {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.pug$/, loader: 'pug'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'views/index.pug',
            minify: false
        })
    ]
};

module.exports = webpackConfig;
