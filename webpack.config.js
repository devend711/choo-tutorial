module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        include: './assets/img/'
      }
    ]
  }
};
