const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset', // Can be 'asset/resource' to handle it in separate file.
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kb - if below it will be asset/inline otherwise asset/resource.
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source' // Be placed directly in your code.
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}