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
  let result = 0;
  const lines = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("\n");
  const groups = [];
  let parts = [];
  lines.forEach((line, i) => {
    if (i === lines.length - 1) {
      groups.push(parts);
    }
    if (i % 3 === 0 && i !== 0) {
      groups.push(parts);
      parts = [];
    }
    parts.push(line);
  });
  console.log(groups);
  groups.forEach((group) => {
    for (let index = 0; index < [...group[0]].length; index++) {
      if (group[1].includes(group[0][index])) {
        if (group[2].includes(group[0][index])) {
          if (group[0][index] === group[0][index].toLowerCase()) {
            result += lowerCasePointLookup(group[0][index]);
            break;
          } else if (group[0][index] === group[0][index].toUpperCase()) {
            result += upperCasePointLookup(group[0][index]);
            break;
          }
        }
      }
    }
  });
  console.log(result);
};

solve();
