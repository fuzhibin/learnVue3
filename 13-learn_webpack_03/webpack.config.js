const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //  {
            //     test: /\.(png|svg|gif|jpe?g)/i,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: './imgs',
            //             name: '[name]_[hash:4].[ext]'
            //         }
            //     }
            // }
            {
                test: /\.(png|svg|gif|jpe?g)/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: './imgs',
                        name: '[name]_[hash:4].[ext]',
                        limit: 10 * 1024
                    }
                }
            }, {
                test: /\.ttf$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name]_[hash:4][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './public/index.html',
            title: 'hahaha'
        }),
        new DefinePlugin({
            BASE_URL: "'./public/'"
        }),
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
}