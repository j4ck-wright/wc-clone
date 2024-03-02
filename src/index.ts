#!/usr/bin/env node

import Parser from "./Parser";
import OutputBuilder from "./OutputBuilder";

const args = process.argv.splice(2);

if (!args.length) {
  console.log("No args provided");
  process.exit(0);
}

try {
  const argParser = new Parser(args);

  const flags = argParser.getFlags();
  const files = argParser.getFiles();

  if (!files.length) {
    console.log("No files provided");
  }

  files.forEach((filePath) => {
    const outputBuilder = new OutputBuilder(flags, filePath);
    const output = outputBuilder.getOutput();

    console.log(output);
  });
} catch (err: unknown) {
  console.log(err);
}
