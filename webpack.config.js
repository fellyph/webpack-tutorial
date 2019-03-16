const path = require('path');

module.exports = (env, options) => ({
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              rules: {
                'no-console': (options.mode === 'development') ? 'off' : 'warn',
              },
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|gif|png|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          fallback: 'file-loader',
          publicPath: '/img',
          outputPath: '/img',
        },
      },
    ],
  },
});
