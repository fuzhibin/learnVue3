const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack");

const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        // assetModuleFilename: "img/[name]_[hash:6][ext]"
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // {
            //     test: /\.(png|svg|gif|jpe?g)/i,
            //     use: ['file-loader']
            // }
            // {
            //     test: /\.(svg|png|gif|jpe?g)/i,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10 * 1024,
            //             outputPath: 'src/img',
            //             name: '[name]_[hash:4].[ext]'
            //         },

            //     }
            {
                test: /\.(svg|png|gif|jpe?g)/i,
                type: 'asset',
                generator: {
                    filename: 'img/[name]_[hash:4][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            }, {
                test: /\.(ttf)/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name]_[hash:4][ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/public/index.html',
            title: 'fuzhibin'
        }),
        new DefinePlugin({
            BASE_URL: "'./src/public/'"
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/public',
                to: './public/',
                globOptions: {
                    ignore: [
                        '**/index.html'
                    ]
                }
            }]
        })

    ]
}