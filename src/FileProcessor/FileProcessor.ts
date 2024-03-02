import { Stats, statSync, readFileSync } from "fs";

export default class FileProcessor {
  protected file: Stats;
  protected text: string;

  constructor(filePath: string) {
    this.file = statSync(filePath);
    this.text = readFileSync(filePath, "utf-8");
  }

  getBytes() {
    return this.file.size;
  }

  getLines() {
    return this.text.split(/\r\n|\r|\n/).length;
  }

  getWords() {
    return this.text.split(/\s+/).length;
  }

  getCharacters() {
    return this.text.length;
  }
}
