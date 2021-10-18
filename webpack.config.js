const path = require('path');

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
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