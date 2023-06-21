const path = require('path');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                ]
                }
                
        
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        port: 3010,
        // watchContentBase: true,
    },
    
}