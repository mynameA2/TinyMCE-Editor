const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        // Копирование HTML файла из корня проекта в папку dist
        new CopyWebpackPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' },  // Путь к HTML в корне, куда его копировать в dist
            ],
        }),
      ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname),
        },
        compress: true,
        port: 9000,
        open: true,
    },
};