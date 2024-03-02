# Unix wc clone

Solution to [CodingChallenge.fyi Build Your Own wc Tool](https://codingchallenges.fyi/challenges/challenge-wc) written in Typescript

## Setup

```bash
nvm install
nvm use
tsc # To compile ts into dist/
```

## Usage

### Via node

```bash
node dist/index.js [-clmw] [file ...]
```

### As a command

```bash
npm install -g .
my-wc [-clmw] [file ...]
```

## Example Usage

```bash
my-wc -c examples/*
342190  examples/example.txt
78601   examples/example2.txt
428673  examples/example3.txt
```

```bash
my-wc examples/*
342190  7146    339292  58166   examples/example.txt
78601   1802    78217   13487   examples/example2.txt
428673  8432    416386  67925   examples/example3.txt
```
