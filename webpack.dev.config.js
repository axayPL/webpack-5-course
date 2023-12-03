const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: {
    "hello-world-page": "./src/hello-world-page.js",
    "image-page": "./src/image-page.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true,
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*'
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "hello-world-page.html",
      chunks: ["hello-world-page"],
      title: "Hello World!",
      template: "src/page-template.hbs",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "image-page.html",
      chunks: ["image-page"],
      title: "Image Page",
      template: "src/page-template.hbs",
      minify: false,
    }),
  ],
};
