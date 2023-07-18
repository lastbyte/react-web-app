const webpackMerge = require('webpack-merge');
const coreConfig = require('./core');
const ServiceWorker = require("./plugins/service-worker");

module.exports = webpackMerge.merge(coreConfig, {
    mode: "production",
    plugins: [ServiceWorker],
});