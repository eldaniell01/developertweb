const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              },
            },
          },
          {
            use:["style-loader","css-loader"],
            test:/.css$/,
          },
          {
            type:"asset",
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
          }
        ],
      },
      resolve:{
        extensions:[".js", ".jsx", ".json"],
    },
};