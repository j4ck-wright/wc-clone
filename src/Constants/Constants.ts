export default class Constants {
  static getValidFlags() {
    return ["c", "l", "m", "w"];
  }

  static getUsage() {
    return `usage: wc [-${this.getValidFlags().join("")}] [file ...]`;
  }
}
