// Print newline, word and byte counts for each file
const { program } = require("commander");
const { readFileSync } = require("fs");

// Command is defined here
program.command('ccww')
  .description('ccwc - print newline, word, and byte counts for each file');

// Command options are defined here
program
  .option('-l --line <FILENAME>', 'Returns the number of lines in a file')
  .option('-w --word <FILENAME>', 'Returns the number of words in a file')
  .option('-m --chars <FILENAME>', 'Returns the number of characters in a file')
  .option('-c, --bytes <FILENAME>', 'Returns the number of bytes in a file')
  
// Parse the input 
program.parse(process.argv);
const options = program.opts();

// Function to count the number of lines in a file
function countLines(filename) {
  // Read the file and convert it to a string
  let text = readFileSync(filename).toString();
  let lineCount = text.split('\n').length;

  return lineCount;
}

if (options.line) {
  console.log(`Number of lines in ${options.line}: ${countLines(options.line)}`);
}

// Function to count the number of words in a file
function countWords(filename) {
  let wordCount = 0;
  // Read the file and seperate it line by line
  let text = readFileSync(filename).toString().split('\n');

  // Iterate through every line to find number of words
  for (const line of text) {
    wordCount += line.split(' ').length;
  }

  return wordCount;
}

if (options.word) {
  console.log(`Number of words in ${options.word}: ${countWords(options.word)}`);
}
