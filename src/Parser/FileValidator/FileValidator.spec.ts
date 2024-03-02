import FileValidator from ".";

const mockStatSync = vi.fn();

vi.mock("fs", () => ({
  statSync: () => mockStatSync(),
}));

describe("File Validator", () => {
  beforeEach(() => {
    mockStatSync.mockImplementation(() => ({
      isFile: () => true,
    }));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Returns array of one file", () => {
    const args = ["example.txt"];
    const fileParser = new FileValidator(args);

    expect(fileParser.getFiles()).toStrictEqual(["example.txt"]);
  });

  it("Returns array of several files", () => {
    const args = ["example.txt", "example2.txt"];
    const fileParser = new FileValidator(args);

    expect(fileParser.getFiles()).toStrictEqual([
      "example.txt",
      "example2.txt",
    ]);
  });

  it("Ignore flags", () => {
    const args = ["-c", "-cw", "example.txt", "example2.txt"];
    const fileParser = new FileValidator(args);

    expect(fileParser.getFiles()).toStrictEqual([
      "example.txt",
      "example2.txt",
    ]);
  });

  it("Returns an empty array when input is empty", () => {
    const fileParser = new FileValidator([]);
    expect(fileParser.getFiles()).toStrictEqual([]);
  });
});
