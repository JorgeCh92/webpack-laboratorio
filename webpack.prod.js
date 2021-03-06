const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    stats: "verbose",
    plugins: [
        new Dotenv({
            path: "./prod.env",
        }),
    ]
});