# AJAX Field for Laravel Nova

[![Latest Stable Version](https://poser.pugx.org/razorcreations/ajax-field/v)](//packagist.org/packages/razorcreations/ajax-field) [![Total Downloads](https://poser.pugx.org/razorcreations/ajax-field/downloads)](//packagist.org/packages/razorcreations/ajax-field) [![Latest Unstable Version](https://poser.pugx.org/razorcreations/ajax-field/v/unstable)](//packagist.org/packages/razorcreations/ajax-field) [![License](https://poser.pugx.org/razorcreations/ajax-field/license)](//packagist.org/packages/razorcreations/ajax-field)

![Preview](http://g.recordit.co/kQljVQNidD.gif)

## Installation

`composer require razorcreations/ajax-field`

For Nova 3 support use 

`composer require razorcreations/ajax-field@0.3.2`

## Usage

```php

	use Razorcreations\AjaxField\AjaxField;

	// Inside your resources fields definition
	AjaxField::make('Foo')->setUrl('/api/ajaxselect/foo'),

	// If you are using integers or floats for the values ensure to chain on the type methods...
	AjaxField::make('Foo')->setUrl('/api/ajaxselect/foo')->typeInt(),
```

The field expects the response from the AJAX call to respond with a JSON array of options in the following format:
```json
[
	{
		"label": "Bob",
		"value": 1,
	},
	{
		"label": "Jenny",
		"value": 2,
	}
]
```
If you wish you can override the default keys of "value" and "label" using the following methods:
```php
	AjaxField::make('Foo')->setUrl('/api/ajaxselect/foo')->setValueKey('id')->setLabelKey('name'),
```

You can pass through another Nova fields value by adding the parent method with the key of the nova field 
```php
	// Create a parent field 
	Text::make('Foo', 'foo');
	
	// Create ajax field, with parent method 
	AjaxField::make('Bar')->setUrl('/api/ajaxselect/foo')->parent('foo'),
```
This will hit the AjaxUrl with the fields key value pair appended as a get param e.g. /api/ajaxselect/foo?foo=value

Rather than having the options loaded in once on page load, you can use ->responsive() to pass through the field value when the input value changes
```php
	AjaxField::make('Foo')->setUrl('/api/ajaxselect/foo')->responsive(),
```


## Contributing

If you would like to contribute please fork the project and submit a PR.

### Coding Standards

- `composer run fix` to fix any PHP linting issues automatically
- `composer run lint` to show any PHP linting issues
- `npm run fix` to fix any JS/Vue linting issue automatically
- `npm run lint` to show any JS/Vue linting issues