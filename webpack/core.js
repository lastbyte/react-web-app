const HtmlWebPackHarddiskPlugin = require('./html-webpack-harddisk-plugin-config');
const path = require("path");
const CopyPlugin = require("./copy-webpack-plugin-config");
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.tsx'),
    },
    module: {
        rules: [
            // type-script files
            {test: /\.(ts|tsx)?$/, loader: "ts-loader"},
            // java-script files (app code)
            {test: /\.(js|jsx)?$/, loader: "babel-loader", exclude: /node_modules/},
            // java-script files
            {test: /\.(js)?$/, loader: "source-map-loader"},
            // css stylesheets
            {test: /\.(css)?$/, use: ["style-loader", "css-loader"]},
            // scss files
            {test: /\.(scss)?$/, loader: "sass-loader"},
            // static resources
            {test: /\.(svg|jpg|jpeg|png)?$/, loader: "file-loader"},
        ],
    },
    plugins: [
        HtmlWebPackHarddiskPlugin,
        CopyPlugin,
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: "[name].js",
    }
}