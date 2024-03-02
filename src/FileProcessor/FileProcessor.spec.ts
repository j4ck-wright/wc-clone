import FileProcessor from ".";

describe("File Parser", () => {
  const fileProcessor = new FileProcessor("example.txt");

  it("Returns correct number of lines", () => {
    expect(fileProcessor.getLines()).toEqual(7146);
  });

  it("Returns correct number of characters", () => {
    expect(fileProcessor.getCharacters()).toEqual(339292);
  });

  it("Returns correct number of words", () => {
    expect(fileProcessor.getWords()).toEqual(58166);
  });

  it("Returns correct number of bytes", () => {
    expect(fileProcessor.getBytes()).toEqual(342190);
  });
});
