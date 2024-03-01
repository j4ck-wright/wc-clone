import FlagValidator from ".";

describe("Flag Validator", () => {
  it("Returns an array of one flag", () => {
    const args = ["-c"];
    const validator = new FlagValidator(args);
    expect(validator.getFlags()).toStrictEqual(["c"]);
  });

  it("Returns an array of several flag", () => {
    const args = ["-c", "-w", "-l"];
    const validator = new FlagValidator(args);
    expect(validator.getFlags()).toStrictEqual(["c", "w", "l"]);
  });

  it("Returns an array of several flags when passed in a -xyz format", () => {
    const args = ["-cwl"];
    const validator = new FlagValidator(args);
    expect(validator.getFlags()).toStrictEqual(["c", "w", "l"]);
  });

  it("Returns an array of several flags when passed in a -xy -z format", () => {
    const args = ["-cw", "-l"];
    const validator = new FlagValidator(args);
    expect(validator.getFlags()).toStrictEqual(["c", "w", "l"]);
  });

  it("Returns an array of flags where duplicates are ignored", () => {
    const args = ["-cwwl", "-c", "-lc", "-wl"];
    const validator = new FlagValidator(args);
    expect(validator.getFlags()).toStrictEqual(["c", "w", "l"]);
  });

  it("Returns an array of flags while ignoring file types", () => {
    const args = ["-cwl", "example.txt"];
    const validator = new FlagValidator(args);
    expect(validator.getFlags()).toStrictEqual(["c", "w", "l"]);
  });

  it("Throws an error string when an invalid flag is passed", () => {
    const args = ["-c", "-x"];

    expect(() => {
      new FlagValidator(args);
    }).toThrowError(/illegal option/);
  });
});
