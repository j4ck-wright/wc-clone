import Constants from "../../Constants";

export default class FlagValidator {
  protected flags: string[] = [];

  constructor(args: string[]) {
    this.parseFlags(args);
  }

  getFlags() {
    return this.flags;
  }

  private flagAlreadyUsed(flag: string) {
    return this.flags.includes(flag);
  }

  private isValidFlag(flag: string) {
    return Constants.getValidFlags().includes(flag);
  }

  private getPotentialFlags(args: string[]) {
    return args.filter((arg) => arg.startsWith("-"));
  }

  private parseFlags(args: string[]) {
    const potentialFlags = this.getPotentialFlags(args);

    potentialFlags.forEach((arg) => {
      let flagCluster = arg.slice(1);
      for (let i = 0; i < flagCluster.length; i++) {
        let singleFlag = flagCluster[i];

        if (!singleFlag) continue;

        if (!this.isValidFlag(singleFlag)) {
          throw `illegal option -- ${singleFlag}\n${Constants.getUsage()}`;
        }

        if (!this.flagAlreadyUsed(singleFlag)) {
          this.flags.push(singleFlag);
        }
      }
    });
  }
}
