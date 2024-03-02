import OutputBuilder from "./OutputBuilder";

describe("Output Builder", () => {
  const filePath = "examples/example.txt";

  it("Outputs with no flags correctly", () => {
    const outputBuilder = new OutputBuilder([], filePath);
    expect(outputBuilder.getOutput()).toEqual(
      `342190\t7146\t339292\t58166\t${filePath}`
    );
  });

  it("Outputs with one flag correctly", () => {
    const outputBuilder = new OutputBuilder(["c"], filePath);
    expect(outputBuilder.getOutput()).toEqual(`342190\t${filePath}`);
  });

  it("Outputs with several flags correctly", () => {
    const outputBuilder = new OutputBuilder(["c", "l", "m"], filePath);
    expect(outputBuilder.getOutput()).toEqual(
      `342190\t7146\t339292\t${filePath}`
    );
  });
});
