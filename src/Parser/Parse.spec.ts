import Parser from ".";

describe("Parser", () => {
  it("Parser happy path", () => {
    const parser = new Parser([
      "-wc",
      "examples/example.txt",
      "examples/example2.txt",
    ]);

    expect(parser.getFiles()).toStrictEqual([
      "examples/example.txt",
      "examples/example2.txt",
    ]);

    expect(parser.getFlags()).toStrictEqual(["c", "w"]);
  });
});
