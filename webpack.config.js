const path = require('path')
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'index.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/, 
            exclude: /(node_modules)/,
             use: { loader: 'babel-loader',
              options: { presets: ['@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          }
        ]
      }
}