import input from "./input";

const result = input.split("\n").reduce((acc, curr) => {
  let nums: number[] = [];
  curr.split("").forEach((char) => {
    if (parseInt(char)) {
      nums.push(parseInt(char));
    }
  });
  const str = "" + nums[0] + nums[nums.length - 1];
  return acc + parseInt(str);
}, 0);

console.log("Part 1: ", result);

const wordsToNumberMap: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const toAdd: number[] = [];

for (let line of input.split("\n")) {
  // replace words with numbers

  const newLine = line
    .replaceAll("one", "o1e")
    .replaceAll("two", "t2o")
    .replaceAll("three", "t3e")
    .replaceAll("four", "f4r")
    .replaceAll("five", "f5e")
    .replaceAll("six", "s6x")
    .replaceAll("seven", "s7n")
    .replaceAll("eight", "e8t")
    .replaceAll("nine", "n9e");

  let unit = 0,
    dec = 0;

  // find first digit
  for (let i = 0; i < newLine.length; i++) {
    if (newLine[i] >= "0" && newLine[i] <= "9") {
      dec = Number(newLine[i]);
      break;
    }
  }

  for (let i = newLine.length - 1; i >= 0; i--) {
    if (newLine[i] >= "0" && newLine[i] <= "9") {
      unit = Number(newLine[i]);
      break;
    }
  }
  toAdd.push(dec * 10 + unit);
}

const result2 = toAdd.reduce((a, b) => a + b, 0);

console.log("Part 2: ", result2);
