import { statSync } from "fs";

export default class FileValidator {
  private readonly files: string[] = [];

  constructor(args: string[]) {
    this.parseFiles(args);
  }

  getFiles() {
    return this.files;
  }

  private filterFlags(args: string[]) {
    return args.filter((arg) => !arg.startsWith("-"));
  }

  private fileAlreadyUsed(filePath: string) {
    return this.files.includes(filePath);
  }

  private validFile(filePath: string) {
    try {
      return statSync(filePath).isFile();
    } catch (err: unknown) {
      console.log(`${filePath} : not found`);
    }
    return false;
  }

  private parseFiles(args: string[]) {
    const potentialFiles = this.filterFlags(args);

    potentialFiles.forEach((filePath) => {
      if (!this.fileAlreadyUsed(filePath)) {
        const isFile = this.validFile(filePath);
        if (isFile) this.files.push(filePath);
      }
    });
  }
}
