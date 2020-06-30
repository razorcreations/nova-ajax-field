<?php

namespace Razorcreations\AjaxField;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		Nova::serving(function (ServingNova $event) {
			Nova::script('ajax-field', __DIR__.'/../dist/js/field.js');
			Nova::style('ajax-field', __DIR__.'/../dist/css/field.css');
		});
	}

	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
	}
}
