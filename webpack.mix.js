let mix = require('laravel-mix')
let path = require('path')

require('./mix')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/field.css', 'css')
  .nova('razorcreations/ajax-field')
  .webpackConfig({
    externals: {
        vue: 'Vue',
    },
    output: {
        uniqueName: 'razorcreations/nova-ajax-field',
    },
    resolve: {
        symlinks: false
    }
})
