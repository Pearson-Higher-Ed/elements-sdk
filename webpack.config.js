const path                   = require('path');
const webpack                = require('webpack');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const ExtractTextPlugin      = require('extract-text-webpack-plugin');
const extractCSS             = new ExtractTextPlugin('css/[name].min.css');
const extractSCSS            = new ExtractTextPlugin('css/[name].min.css');
const demo                   = `${__dirname}/demo/demo.js`;
const demoScss               = `${__dirname}/demo/demo.scss`;
const main                   = `${__dirname}/demo/main.js`;
const compounds              = `${__dirname}/index.js`;
const elements               = `${__dirname}/src/styles/elements.scss`;
const elementsNP             = `${__dirname}/src/styles/elementsNoPlain.scss`;
const icons                  = `${__dirname}/src/styles/assets/icons/p-icons-sprite-1.1.svg`;
const osItalicWoff           = `${__dirname}/src/styles/assets/fonts/opensans-italic.woff`;
const osItalicWoffII         = `${__dirname}/src/styles/assets/fonts/opensans-italic.woff2`;
const osLightWoff            = `${__dirname}/src/styles/assets/fonts/opensans-light.woff`;
const osLightWoffII          = `${__dirname}/src/styles/assets/fonts/opensans-light.woff2`;
const osLightItalicWoff      = `${__dirname}/src/styles/assets/fonts/opensans-lightitalic.woff`;
const osLightItalicWoffII    = `${__dirname}/src/styles/assets/fonts/opensans-lightitalic.woff2`;
const osRegularWoff          = `${__dirname}/src/styles/assets/fonts/opensans-regular.woff`;
const osRegularWoffII        = `${__dirname}/src/styles/assets/fonts/opensans-regular.woff2`;
const osSemiBoldWoff         = `${__dirname}/src/styles/assets/fonts/opensans-semibold.woff`;
const osSemiBoldWoffII       = `${__dirname}/src/styles/assets/fonts/opensans-semibold.woff2`;
const osSemiBoldItalicWoff   = `${__dirname}/src/styles/assets/fonts/opensans-semibolditalic.woff`;
const osSemiBoldItalicWoffII = `${__dirname}/src/styles/assets/fonts/opensans-semibolditalic.woff2`;
const imgDarkOctocat         = `${__dirname}/src/styles/assets/images/dark-octocat.svg`;
const imgPearsonSprite       = `${__dirname}/src/styles/assets/images/Pearson-sprite.svg`;
const imgPearsonIcon         = `${__dirname}/src/styles/assets/images/PearsonIcon.svg`;
const imgPearsonLogo         = `${__dirname}/src/styles/assets/images/PearsonLogo.svg`;

module.exports = {
  entry: {
    elements          : [ elements, osItalicWoff, osItalicWoffII, osLightWoff, osLightWoffII, osLightItalicWoff, osLightItalicWoffII, osRegularWoff, osRegularWoffII, osSemiBoldWoff, osSemiBoldWoffII, osSemiBoldItalicWoff, osSemiBoldItalicWoffII, imgDarkOctocat, imgPearsonSprite, imgPearsonIcon, imgPearsonLogo ],
    elementsNoPlain   : [ elementsNP ],
    demo              : [ demo, demoScss ],
    dev               : [ icons ],
    eventInstantiator : [ main ],
    dist              : [ compounds ]
  },
  output: {
    path          : path.resolve(__dirname, 'build'),
    filename      : '[name].compounds.js',
    publicPath    : '/build/',
    libraryTarget : 'umd'
  },
  devtool: 'source-map',
  devServer: {
    host               : '0.0.0.0',
    port               : 8081,
    publicPath         : '/compounds/',
    https              : false,
    overlay            : true,
    watchContentBase   : true,
    disableHostCheck   : true,
    historyApiFallback : true,
    watchOptions       : { poll: true },
    staticOptions      : { redirect: false },
    contentBase        : path.join(__dirname, 'build')
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([
          'css-loader',
          'style-loader'
        ])
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\/icons\/\S+\.svg$/,
        loader: 'file-loader',
        options: {
          name: '/icons/[name].[ext]?[hash]'
        }
      },
      {
        test: /\/images\/\S+\.(gif|jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]?[hash]'
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NamedModulesPlugin(),
    extractSCSS,
    extractCSS
  ]
};
