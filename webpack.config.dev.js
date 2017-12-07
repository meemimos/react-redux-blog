import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'react-hot-loader/webpack' ,'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    }
}