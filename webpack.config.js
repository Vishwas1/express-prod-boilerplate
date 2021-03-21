var path =  require('path');

module.exports = {
  entry: ["./src/app.ts"],
  output: {
    filename: 'api.bundle.js',
    path: path.resolve(__dirname,"dist")
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader',exclude: /node_modules/,}
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".json"]
  },
  target: 'node',
  node: {
        __dirname: true
    },
  plugins: []
};