const webpackMerge = require('webpack-merge');
const coreConfig = require('./core');
const path = require("path");
const ServiceWorker = require("./service-worker");
const HtmlWebpackPluginConfig = require("./html-webpack-plugin-config");

module.exports = webpackMerge.merge(coreConfig, {
    mode: "production",
    plugins: [HtmlWebpackPluginConfig, ServiceWorker],
});