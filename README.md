# CLI Tools with Bun

This repository contains a set of command-line interface (CLI) tools built with Bun.

## Tools

### HTML Juicer

The HTML Juicer extracts content from HTML files. It uses the `cheerioContentJuicer` function from the `src` directory.

Usage:

```bash
bun index.ts --html-juicer [url] [selector]
```

## Bulk Rename

The Bulk Rename tool renames multiple files in a directory. It uses the `bulkRename` function from the `src` directory.

Usage:

```bash
bun index.ts --bulk-rename [directory] [name-pattern]
```

## Error Handling

If an unrecognized command is entered, the program will output an error message.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

MIT
