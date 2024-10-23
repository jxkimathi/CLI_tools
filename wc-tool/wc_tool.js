// Print newline, word and byte counts for each file
const { program } = require("commander");
const { readFileSync } = require("fs");

// Command is defined here
program.command('ccww')
  .description('ccwc - print newline, word, and byte counts for each file');

// Command options are defined here
program
  .option('-l --line <fileName>', 'Returns the number of lines in a file')
  .option('-w --word <fileName>', 'Returns the number of words in a file')
  .option('-m --chars <fileName>', 'Returns the number of characters in a file')
  .option('-c, --bytes <fileName>', 'Returns the number of bytes in a file')
  
// Parse the input 
program.parse(process.argv);
const options = program.opts();

// Function to count the number of lines in a file
function countLines(fileName) {
  // Read the file and convert it to a string
  let text = readFileSync(fileName).toString();
  let lineCount = text.split('\n').length;

  return lineCount;
}

if (options.line) {
  console.log(`Number of lines in ${options.line}: ${countLines(options.line)}`);
}

// Function to count the number of words in a file
function countWords(fileName) {
  let wordCount = 0;
  // Read the file and seperate it line by line
  let text = readFileSync(fileName).toString().split('\n');

  // Iterate through every line to find number of words
  for (const line of text) {
    wordCount += line.split(' ').length;
  }

  return wordCount;
}

if (options.word) {
  console.log(`Number of words in ${options.word}: ${countWords(options.word)}`);
}

// Function to count the number of characters in a file
function countChars(fileName) {
  // Read the file and get the length of characters
  let charCount = readFileSync(fileName).toString().length;

  return charCount;
}

if (options.chars) {
  console.log(`Number of characters in ${options.chars}: ${countChars(options.chars)}`);
}

// Function to count the number of bytes in a file
function countBytes(fileName) {
  // Read the file and get the length
  let byteCount = readFileSync(fileName).length;

  return byteCount;
}

if (options.bytes) {
  console.log(`Number of bytes in ${options.bytes}: ${countBytes(options.bytes)}`);
}

// Function for when no flag is passed
function defaultCase(fileName) {
  // Should return number of lines, words, bytes and characters
  let bytes = countBytes(fileName);
  let chars = countChars(fileName);
  let words = countWords(fileName);
  let lines = countLines(fileName);

  console.log(`Number of bytes: ${bytes}`);
  console.log(`Number of chars: ${chars}`);
  console.log(`Number of words: ${words}`);
  console.log(`Number of lines: ${lines}`);
}

if (process.argv.length < 5) {
  defaultCase(process.argv[3]);
}