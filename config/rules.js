const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    test: /\.(js|jsx)$/, // 匹配文件
    exclude: /node_modules/, // 过滤文件夹
    use: {
      loader: "babel-loader"
    }
  },
  {
    test: /\.s?css$/, // 匹配文件
    use: [
      process.env.NODE_ENV !== "SERVER"
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: process.env.NODE_ENV === "DEV" ? "./" : "../"
            }
          }
        : "style-loader", // 使用<style>将css-loader内部样式注入到我们的HTML页面,
      "css-loader", // 加载.css文件将其转换为JS模块
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: "./" // 写到目录即可，文件名强制要求是postcss.config.js
          }
        }
      },
      "sass-loader" // 加载 SASS / SCSS 文件并将其编译为 CSS
    ]
  },
  {
    test: /\.(html)$/,
    use: {
      loader: "html-loader"
    }
  },
  {
    test: /\.(png|svg|jpe?g|gif)$/i, // 图片处理
    use:
      process.env.NODE_ENV === "PROD"
        ? [
            {
              loader: "url-loader",
              options: {
                name: "[name].[hash:5].[ext]",
                limit: 20 * 1024, // size <= 50kb
                outputPath: "img"
              }
            },
            {
              loader: "image-webpack-loader",
              options: {
                // Compress JPEG images
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // Compress PNG images
                optipng: {
                  enabled: false
                },
                //  Compress PNG images
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                // Compress GIF images
                gifsicle: {
                  interlaced: false
                }
              }
            }
          ]
        : [
            {
              loader: "url-loader",
              options: {
                name: "[name].[hash:5].[ext]",
                limit: 20 * 1024, // size <= 50kb
                outputPath: "img"
              }
            }
          ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体处理
    use: ["file-loader"]
  },
  {
    test: /\.xml$/, // 文件处理
    use: ["xml-loader"]
  }
];
