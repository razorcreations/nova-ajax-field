let mix = require('laravel-mix')

mix.setPublicPath('dist')
	.js('resources/js/field.js', 'js')
	.css('resources/css/field.css', 'css')
	.vue({version: 3})
	.webpackConfig({
		externals: {
			vue: 'Vue',
		},
		output: {
			uniqueName: 'spatie/nova-ajax-field',
		},
		resolve: {
			symlinks: false
		}
	})
