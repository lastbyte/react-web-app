const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const coreConfig = require('./core');
const path = require("path");
const ServiceWorker = require("./service-worker");
const HtmlWebpackPluginConfig = require("./html-webpack-plugin-config");
module.exports = webpackMerge.merge(coreConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: "8080",
        compress: true,
        static: path.resolve(__dirname, '../public/assets'),
        hot: true,
        historyApiFallback: true,
    },
    plugins: [HtmlWebpackPluginConfig],
});