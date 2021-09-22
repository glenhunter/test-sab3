/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
const path = require('path');
const CopyModulesPlugin = require('copy-modules-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const libImgDir = path.resolve(__dirname, 'node_modules/@sonatype/react-shared-components/assets/img');

module.exports = function(env = { production: false }) {
  const productionPlugins = env.production ? [
    new CopyModulesPlugin({
      destination: 'webpack-modules',
      includePackageJsons: true
    })
  ] : [];

  return {
    // overridden by command-line flag for prod build
    mode: 'development',
    context: path.resolve(__dirname, 'src/main/'),
    entry: './index.jsx',
    output: {
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      symlinks: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'resolve-url-loader' },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'compressed'
                }
              }
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]'
          }
        },
        {
          include: libImgDir,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]'
          }
        },
        {
          test: /\.(ttf|eot|woff2?|svg)$/,
          exclude: libImgDir,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      ...productionPlugins
    ],
    devtool: env.production ? false : 'eval-source-map',
    devServer: {
      port: 8044,
      host: '0.0.0.0',
      publicPath: '/',
      contentBase: path.join(__dirname, 'src/main/')
    }
  };
};
