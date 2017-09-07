var webpack = require('webpack');
var path = require('path');
module.exports = {
    //entry: __dirname + '/app/app.js',
    entry: ["whatwg-fetch", "./app/app.jsx"],
    output: {
        path: path.join(__dirname, "public"),
        filename: 'index.js',
        publicPath: "/public/"
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015&presets[]=react']
        }, {
            test: /\.(css|less)$/,
            exclude: /node_modoules/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    devServer: {
        hot: true,
        inline: true
    }
    /*resolve:{
        extensions:["",".js",".css",".less",".jsx"]
    }*/
}