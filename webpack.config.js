module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{
          loader: 'tslint-loader',
          options: {
            emitErrors: true
          }
        }]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};
