export default class Constants {
  static FLAGS = ["c", "l", "m", "w"];

  static USAGE = `usage: wc [-${this.FLAGS.join("")}] [file ...]`;
}
