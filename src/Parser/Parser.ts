import FileValidator from "./FileValidator";
import FlagValidator from "./FlagValidator";

export default class Parser {
  protected flags: string[] = [];
  protected files: string[] = [];

  constructor(args: string[]) {
    const flagParser = new FlagValidator(args);
    const fileParser = new FileValidator(args);
    this.flags = flagParser.getFlags();
    this.files = fileParser.getFiles();
  }

  getFlags() {
    return this.flags;
  }

  getFiles() {
    return this.files;
  }
}
