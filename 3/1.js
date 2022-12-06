const fs = require("fs");
const path = require("path");

const charCodes = Array.from(Array(26)).map((_, i) => i + 65);
const lowerCaseAlphabet = charCodes.map((charCode) =>
  String.fromCharCode(charCode).toLowerCase()
);
const upperCaseAlphabet = charCodes.map((charCode) =>
  String.fromCharCode(charCode)
);

const lowerCasePointLookup = (letter) => lowerCaseAlphabet.indexOf(letter) + 1;
const upperCasePointLookup = (letter) => upperCaseAlphabet.indexOf(letter) + 27;

const solve = () => {
  const lines = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("\n");
  let result = 0;
  lines.forEach((line) => {
    const half = line.length / 2;
    const firstHalf = line.slice(0, half);
    const secondHalf = line.slice(half);
    for (let index = 0; index < [...firstHalf].length; index++) {
      if (secondHalf.includes(firstHalf[index])) {
        if (firstHalf[index] === firstHalf[index].toLowerCase()) {
          result += lowerCasePointLookup(firstHalf[index]);
          break;
        } else if (firstHalf[index] === firstHalf[index].toUpperCase()) {
          result += upperCasePointLookup(firstHalf[index]);
          break;
        }
      }
    }
  });
  console.log(result);
};

solve();
