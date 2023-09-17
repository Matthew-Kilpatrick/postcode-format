<?php
/**
 * Generate map file from country code to its formatter class
 */
$files = array_diff(scandir(__DIR__ . "/../src/Formatter"), ['.', '..']);
$imports = [];
$exports = [];

foreach ($files as $file) {
  $countryCode = substr($file, 0, 2);
  $fileNoExt = str_replace('.js', '', $file);
  $imports[] = "import $fileNoExt from './Formatter/$file';";
  $exports[] = "    $countryCode: $fileNoExt,";
}

$output = implode("\n", $imports) . "\n\nexport default {\n" . implode("\n", $exports) . "\n};";
file_put_contents(__DIR__ . '/../src/country-map.js', $output);