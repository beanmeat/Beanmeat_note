const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    mode: "none",

    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html'),
        filename: "app.html", // 生成的文件名字
        inject: 'body' // 标签注入到body标签里面
    })]
}