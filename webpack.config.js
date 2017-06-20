const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        client: path.join(__dirname, 'src', 'client.js'),
        server: path.join(__dirname, 'src', 'server.js')
    },
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: path.join(__dirname, 'src'),
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: 'babel_cache',
                        presets: ['react', 'es2015', 'babel-preset-react']
                    }
                }
            ]
        }]
    },
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
}