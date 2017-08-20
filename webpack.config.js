const webpack = require('webpack')

module.exports = {
    entry: __dirname + '/src/' + 'client.js',
    output: {
        filename: './static/client.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'es2015', 'react']
                        }
                    }
                ]
            }
            // {
            //     test: /\.css$/,
            //     use: [
            //         {loader: 'style-loader'},
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true
            //             }
            //         }
            //     ]
            // }
        ]
    }
}