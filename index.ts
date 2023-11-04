import { bulkRename, cheerioContentJuicer } from "./src";

const enum CliTools {
  HTML_JUICER = "--html-juicer",
  BULK_RENAME = "--bulk-rename",
}

const cliArgs = Bun.argv;
const cliTool = cliArgs[2];

switch (cliTool) {
  case CliTools.HTML_JUICER: {
    const response = await cheerioContentJuicer(cliArgs[3], cliArgs[4]);
    console.log(response);
    break;
  }
  case CliTools.BULK_RENAME: {
    bulkRename(cliArgs[3], cliArgs[4]);
    break;
  }
  default: {
    console.error("That's not something I can do. Sorry.");
  }
}
