const path = require('path');

module.exports = {
  mode: 'development',  // hoặc 'production' nếu bạn đang triển khai sản phẩm
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Đường dẫn đến thư mục public
    publicPath: '/',  // cần thiết cho HMR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,  // bật hot reloading
    historyApiFallback: true,  // hỗ trợ cho SPA
  }
};
