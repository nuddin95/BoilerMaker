'use strict';
module.exports = {
    entry: './client/main.jsx',
    output: {
        path: __dirname+"/Public/",
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        ]
    }
};