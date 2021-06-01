const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.comm.config')
module.exports = merge(CommonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        hot: true,
        host: 'localhost',
        port: '10000',
        compress: true,
        proxy: {
            '/api': {
                target: 'http://localhost:10000',
                pathRewrite: {
                    '/api': ''
                },
                secure: false,
                changeOrigin: true
            }
        }
    }
})