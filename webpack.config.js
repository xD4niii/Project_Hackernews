const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
            },
            
        ],
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            publicPath: './'
        }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new FaviconsWebpackPlugin({
            logo: "src/assets/img/favicon/favicon-32x32.png",
            manifest: "src/assets/img/favicon/site.webmanifest",
            inject: true,
            cache: false,
            // mode: "light",
            // devmode: "light",

            icons: {
                android: true,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: false,
                firefox: true,
                windows: false,
                yandex: false
            },
        }),
        new CopyPlugin({
        patterns: [
        { from: 'src/assets/img/favicon/site.webmanifest', to: 'site.webmanifest' },
        { from: 'src/assets/img/favicon/favicon.ico', to: 'favicon.ico' },
      ],
    }),
    
    ],
    mode: 'development',
    // devtool: 'source-map',
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist'),
    //     },
    //     compress: true,
    //     port: 9000,
    //     open: true,
    // },
};