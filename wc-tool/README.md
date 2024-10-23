# wc-tool

`wc-tool` is a command-line interface (CLI) tool that replicates the functionality of the Unix `wc` (word count) command. It allows you to count the number of lines, words, and characters in a file.

## Features

- Count lines, words, bytes and characters in a file
- Supports multiple files
- Easy to use and lightweight

## Installation

To install `wc-tool`, clone the repository and build the project:

```sh
git clone https://github.com/jxkimathi/wc-tool.git
cd wc-tool
make
```

## Usage

To use `wc-tool`, run the following command:

```sh
node ./wc_tool.js [options] [file...]
```

### Options

- `-l` : Print the number of lines
- `-w` : Print the number of words
- `-c` : Print the number of bytes
- `-m` : Print the number of characters (excluding spaces)

### Examples

Count lines, words, and characters in a single file:

```sh
node ./wc_tool -lwc filename.txt
```

Count lines in multiple files:

```sh
node ./wc_tool -l file1.txt file2.txt
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact me at [Email](judescriva8@gmail.com).
