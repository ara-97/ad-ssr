const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
];

if (!dev) {
    plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    }));
}

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join(__dirname, "src"),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./components/client.js",
    },
    resolve: {
        modules: [
            path.resolve("./src"),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread']
                    }
                  }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    performance: {
        hints: false,
        maxEntrypointSize: 400000,
        maxAssetSize: 100000
    },
    plugins,
};