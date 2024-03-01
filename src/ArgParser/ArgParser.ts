import FlagValidator from "./FlagValidator";

export default class ArgParser {
  protected flags: string[] = [];
  protected files: string[] = [];

  constructor(args: string[]) {
    const flagParser = new FlagValidator(args);
    this.flags = flagParser.getFlags();
  }

  getFlags() {
    return this.flags;
  }

  getFiles() {
    return this.files;
  }
}
