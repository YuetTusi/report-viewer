const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const themeUrl = path.resolve(__dirname, './styles/theme.less');

const config = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@root': path.resolve(__dirname, './'),
			'@src': path.resolve(__dirname, './src')
		}
	},
	devServer: {
		contentBase: './dist',
		port: 8089,
		compress: true,
		overlay: {
			errors: true,
			warnings: true
		},
		hot: false
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: 'ts-loader'
					}
				],
				include: path.resolve(__dirname, './src')
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
								modifyVars: {
									hack: `true; @import "${themeUrl}";`
								}
							}
						}
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: '/images',
							publicPath: './images'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: '/fonts',
							publicPath: './fonts'
						}
					}
				]
			}
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './template/default.html')
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'assert', to: 'assert' },
				{ from: 'public', to: 'public' }
			]
		})
	]
};

module.exports = config;
