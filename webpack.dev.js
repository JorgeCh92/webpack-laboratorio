const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        stats: "errors-only"
    },
    plugins: [
        new Dotenv({
            path: './dev.env',
        }),
    ],
});