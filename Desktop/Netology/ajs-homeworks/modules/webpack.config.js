const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugun = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [{
			  test: /\.html$/, use: 'html-loader'
            },
            {
                test: /\.css$/, use: [ MiniCssExtractPlugun.loader, 'css-loader' ]
            },
            {
                test: /\.js$/, exclude: '/node_modules/', use: 'babel-loader' 
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
			}),
		new MiniCssExtractPlugun(),
	],
	
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'app.bunndle.js' 
	}
}