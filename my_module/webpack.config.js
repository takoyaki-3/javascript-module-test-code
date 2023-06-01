// webpack.config.js

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Butter',
        libraryTarget: 'window',
    },
    mode: 'development'
};