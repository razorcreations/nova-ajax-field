# AJAX Field for Laravel Nova

## Installation

1. `composer require razorcreations/ajax-field`

## Usage

```php
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