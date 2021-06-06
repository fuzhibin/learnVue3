const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.node'],
        mainFiles: ['index.js'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
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
        new htmlWebpackPlugin({
            template: './public/index.html',
            title: 'hahaha'
        }),
        new DefinePlugin({
            BASE_URL: "'./public/'"
        }),
    ]
}