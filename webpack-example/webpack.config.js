const path = require('path')

module.exports = {
    entry: './app/App.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    resolve: {
        root: path.resolve('./node_modules'),
        extensions: ['', '.js', '.jsx'],
        alias: {
            shared: path.resolve('../shared')
        },
        modules: [
            path.resolve('../shared'),
            'node_modules'
        ],
        loaders: [
            path.resolve('../shared'),
            'node_modules'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: [
                    /*'es2015-loose', */
                    'es2015',
                    'react'
                ]
            }
        }]
    }
}
