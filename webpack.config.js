module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    inline:true,
    port: 8080
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
