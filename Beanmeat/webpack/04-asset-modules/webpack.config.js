const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext][query]',
    },
    mode: "development",
    devtool: 'inline-source-map',

    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html'),
        filename: "app.html", // 生成的文件名字
        inject: 'body' // 标签注入到body标签里面
    })],

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
            }
        ]
    }
}