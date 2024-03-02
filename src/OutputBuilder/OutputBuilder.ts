import Constants from "../Constants";
import FileProcessor from "../FileProcessor";

export default class OutputBuilder {
  protected flags: String[];
  protected fileProcessor: FileProcessor;
  protected filePath: string;
  private output = "";

  constructor(flags: String[], filePath: string) {
    this.flags = flags?.length ? flags : Constants.FLAGS;
    this.filePath = filePath;
    this.fileProcessor = new FileProcessor(filePath);
    this.build();
  }

  getOutput() {
    return (this.output + "\t" + this.filePath).trim();
  }

  private build() {
    this.flags.forEach((flag) => {
      switch (flag) {
        case "c":
          this.output += "\t" + this.fileProcessor.getBytes();
          break;
        case "l":
          this.output += "\t" + this.fileProcessor.getLines();
          break;
        case "m":
          this.output += "\t" + this.fileProcessor.getCharacters();
          break;
        case "w":
          this.output += "\t" + this.fileProcessor.getWords();
          break;
      }
    });
  }
}
