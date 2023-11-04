import * as fs from "node:fs";
import * as path from "path";

export const bulkRename = (oldDirName: string, newName: string) => {
  fs.readdirSync(oldDirName).forEach((file, index) => {
    const oldPath = path.join(oldDirName, file);
    const newPath = path.join(oldDirName, newName + index + path.extname(file));
    fs.renameSync(oldPath, newPath);
  });
};

export default bulkRename;
