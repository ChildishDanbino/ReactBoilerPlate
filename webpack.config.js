const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/',
	output: {
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'ReactBoilerPlate',
			filename: 'index.html',
			template: 'index.template.html',
		}),
	],
};

