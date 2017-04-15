var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //webpack
    devtool: 'eval-source-map',
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: "bundle-[hash].js"
    },
    //Loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    //webpack-dev-server
    devServer: {
        contentBase: __dirname + "/dist",
        historyApiFallback: true,
        inline: true
    }
};