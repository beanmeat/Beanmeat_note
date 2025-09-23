const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext][query]',
    },
    mode: "production",
    devtool: 'inline-source-map',
    // 优化配置
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all',
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: "app.html", // 生成的文件名字
            inject: 'body', // 标签注入到body标签里面
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash].css'
        })
    ],

    devServer: {
        static: './dist'
    },

    // 配置资源文件
    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext][query]',
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline',
                generator: {
                    dataUrl: content => {
                        content =  content.toString();
                        return svgToMiniDataURI(content);
                    }
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.jpg$/,
                type: 'asset',
                parser: {
                    dataUrlConditon: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: json5.parse,
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}