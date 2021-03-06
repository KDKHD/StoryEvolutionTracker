const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')

const isLocal = slsw.lib.webpack.isLocal

module.exports = {
  mode: isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      services: path.resolve(__dirname, 'src/services'),
      database: path.resolve(__dirname, 'src/database'),
      modules: path.resolve(__dirname, 'src/services/graphql/modules'),
      models: path.resolve(__dirname, 'src/database/models'),
    },
    modules: [path.join(__dirname, 'node_modules')],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.build'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
}


