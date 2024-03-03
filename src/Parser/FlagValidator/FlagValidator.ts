import Constants from "../../Constants";

export default class FlagValidator {
  private readonly flags: string[] = [];

  constructor(args: string[]) {
    this.parseFlags(args);
    this.sortFlags();
  }

  getFlags() {
    return this.flags;
  }

  private flagAlreadyUsed(flag: string) {
    return this.flags.includes(flag);
  }

  private isValidFlag(flag: string) {
    return Constants.FLAGS.includes(flag);
  }

  private getPotentialFlags(args: string[]) {
    return args.filter((arg) => arg.startsWith("-"));
  }

  private sortFlags() {
    const order = Constants.FLAGS;
    this.flags.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  }

  private parseFlags(args: string[]) {
    const potentialFlags = this.getPotentialFlags(args);

    potentialFlags.forEach((arg) => {
      let flagCluster = arg.slice(1);
      for (let i = 0; i < flagCluster.length; i++) {
        let singleFlag = flagCluster[i] as string;

        if (!this.isValidFlag(singleFlag)) {
          throw `illegal option -- ${singleFlag}\n${Constants.USAGE}`;
        }

        if (!this.flagAlreadyUsed(singleFlag)) {
          this.flags.push(singleFlag);
        }
      }
    });
  }
}
