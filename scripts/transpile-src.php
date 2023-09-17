<?php
/**
 * A script to import country formatters from the PHP lib version to JavaScript
 * This is designed to handle the majority of country implementations with some simple regexes to map between language
 * syntax, in some cases manual changes will be required (which the script aims to indicate by adding to-do comments to
 * the respective files)
 * Script usage: php transpile-src.php path/to/root/of/brick-postcode/repo
 */
$localPathToBrickPostcodeDir = $argv[1];

// Focus on basic automated parsing that works in most cases
// In cases we can't handle, create the file with a to-do comment that it needs manual work & output this in console (eg. GB has a lot of custom logic)
// Copying formatter tests should be relatively simple to do also
require "$localPathToBrickPostcodeDir/vendor/autoload.php";

$files = array_diff(scandir("$localPathToBrickPostcodeDir/src/Formatter"), ['.', '..']);
foreach ($files as $file) {
  $file = str_replace('.php', '', $file);
  $class = "\Brick\Postcode\Formatter\\$file";
  $class = new $class();

  $reflection = new ReflectionClass($class);
  $startLine = $reflection->getMethod('format')->getStartLine() + 1;
  $endLine = $reflection->getMethod('format')->getEndLine() - 1;
  $className = explode('\\', $reflection->name);
  $className = end($className);
  $fileDoc = $reflection->getDocComment();
  $filePath = $reflection->getFileName();
  $file = file($filePath);
  $lines = array_slice($file, $startLine, $endLine-$startLine);
  $transpile = [];
  $vars = [];
  foreach ($lines as $line) {

    if (str_contains($line, '$this') || str_contains($line, 'self::')) {
      $transpile[] = "// TODO: following line couldn't be auto-transpiles, please implement\n";
    }

    // Map preg_match to pattern testing
    if (str_contains($line, '$matches')) {
      $vars[] = 'matches';
    }
    $line = preg_replace('/if \(preg_match\(\'(.+)\', \$postcode, \$matches\) !== 1\) {/', "if (!(matches = postcode.match($1))) {", $line);
    $line = preg_replace('/if \(preg_match\(\'(.+)\', \$postcode\) !== 1\) {/', "if (!$1.test(postcode)) {", $line);

    // Map strlen to .length
    $line = preg_replace('/strlen\(\$([A-z0-9]+)\)/', '$1.length', $line);

    // Array lookup mapping
    $line = preg_replace('/in_array\(\$(.+), \[(.+)\](, true)?\)/', '[$2].indexOf($1) !== -1', $line);

    // substr mapping
    $line = preg_replace('/substr\(\$([A-z0-9]+), ([0-9]+)\)/', '$1.substring($2)', $line);
    $line = preg_replace('/substr\(\$([A-z0-9]+), 0, ([0-9]+)\)/', '$1.substring(0, $2)', $line);
    $line = preg_replace('/substr\(\$([A-z0-9]+), ([0-9]+), ([0-9]+)\)/', '$1.substring($2, $3+$2)', $line);

    // elseif -> else if mapping
    $line = str_replace('elseif', 'else if', $line);

    // Int type casting
    $line = preg_replace('/\(int\) (.+);/', 'Number.parseInt($1);', $line);

    // String concatenation mapping (. -> +)
    $prevLine = '';
    while ($prevLine !== $line) {
      $prevLine = $line;
      $line = preg_replace('/return (.+) \. (.+)/', 'return $1 + $2', $line);
    }

    // Track variable assignments
    if (preg_match('/\$([A-z0-9]+) = .+;/', $line, $matches)) {
      $vars[] = $matches[1];
    }

    // Remove variable dollar signs (can't just str_replace $ as that'd interfere with regexps)
    $line = preg_replace('/\$([A-z0-9]+)/', '$1', $line);

    // Unindent by 1 level
    $transpile[] = substr($line, 4);
  }
  $vars = array_unique($vars);
  $vars = array_diff($vars, ['postcode']);  // Don't re-declare parameter
  if (count($vars) > 0) {
    // Add line break after inserted var declarations
    array_unshift($transpile, "\n");
  }
  foreach ($vars as $var) {
    array_unshift($transpile, "    let $var;\n");
  }
  $transpile = implode('', $transpile);

  $output = <<<EOF
$fileDoc
export default function format(postcode) {
$transpile
}
EOF;


  file_put_contents(__DIR__ . "/../src/Formatter/$className.js", $output);

}