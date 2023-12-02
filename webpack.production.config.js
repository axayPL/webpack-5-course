const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world-page': './src/hello-world-page.js',
    'image-page': './src/image-page.js',

  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset", // Can be 'asset/resource' to handle it in separate file.
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kb - if below it will be asset/inline otherwise asset/resource.
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source", // Be placed directly in your code.
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-transform-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: [
            'handlebars-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
        title: 'Webpack',
        template: 'src/index.hbs'
    })
  ],
};
