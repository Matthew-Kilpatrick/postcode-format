<?php
/**
 * A script to import test cases from the PHP lib version to JavaScript
 * Script usage: php transpile-tests.php path/to/root/of/brick-postcode/repo
 */
$localPathToBrickPostcodeDir = $argv[1];

require "$localPathToBrickPostcodeDir/vendor/autoload.php";

$files = array_diff(scandir("$localPathToBrickPostcodeDir/tests/Formatter"), ['.', '..']);
foreach ($files as $fileName) {
  $fileName = str_replace('.php', '', $fileName);
  $srcFileName = str_replace('Test', '', $fileName);

  $class = "\Brick\Postcode\Tests\Formatter\\$fileName";
  $class = new $class();

  $reflection = new ReflectionClass($class);
  $startLine = $reflection->getMethod('providerFormat')->getStartLine() + 1;
  $endLine = $reflection->getMethod('providerFormat')->getEndLine() - 1;

  $filePath = $reflection->getFileName();
  $file = file($filePath);
  $lines = array_slice($file, $startLine, $endLine-$startLine);
  $lines[0] = ltrim(str_replace('return ', '', $lines[0]));
  $lines[count($lines) - 1] = rtrim(substr($lines[count($lines) - 1], 0, -2));
  $lines = implode('', $lines);

  $output = <<<EOF
import $srcFileName from "../../src/Formatter/$srcFileName.js";

const tests = $lines;
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as \${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect($srcFileName(input)).toBe(expected);
    });
});
EOF;


  file_put_contents(__DIR__ . "/../tests/Formatter/$fileName.test.js", $output);

}