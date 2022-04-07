<?php
$config = new PhpCsFixer\Config();

return $config
	->setRules([
		'@Symfony' => true,
		'@PHP71Migration' => true,
		'array_syntax' => ['syntax' => 'short'],
		'method_chaining_indentation' => true,
		'no_useless_else' => true,
		'no_useless_return' => true,
		'ordered_class_elements' => true,
		'ordered_imports' => true,
		'phpdoc_order' => true,
		'strict_comparison' => true,
		'strict_param' => true,
		'yoda_style' => false,
		'full_opening_tag' => true,
		'indentation_type' => true,
         ])
    ->setIndent("\t")
    ->setLineEnding("\n")
	->setRiskyAllowed(true)
	->setFinder(
		PhpCsFixer\Finder::create()
			->in([
				'src',
			])
	);
