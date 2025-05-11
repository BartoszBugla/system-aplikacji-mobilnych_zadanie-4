const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let htmlPageNames = ["form", "details"];

let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./${name}.html`,
    filename: `${name}.html`,
    chunks: [`${name}`],
  });
});

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/system-aplikacji-mobilnych_zadanie-4"),
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: "raw-loader",
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(ts|html)?$/,
        loader: "string-replace-loader",
        options: {
          search: "system-aplikacji-mobilnych_zadanie-4",
          replace: "system-aplikacji-mobilnych_zadanie-4",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["main"],
    }),

    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ].concat(multipleHtmlPlugins),
  mode: "development",
};
