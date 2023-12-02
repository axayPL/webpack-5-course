const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true
  },
  mode: "none",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    }
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
        use: [
            'handlebars-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack',
        template: 'src/index.hbs'
    }),
  ],
};
