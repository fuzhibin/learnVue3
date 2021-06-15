const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CommonConfig = require('./webpack.comm.config')
const { merge } = require('webpack-merge')
module.exports = merge(CommonConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: './public',
                to: './public/',
                globOptions: {
                    ignore: ['**/index.html']
                }
            }]
        })
    ]
})