const fs = require("fs");
const path = require("path");

const solve = () => {
  let markerCounter = 0;
  const input = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("");
  for (let i = 0; i < input.length - 3; i++) {
    if (input.slice(i, i + 4).length === new Set(input.slice(i, i + 4)).size) {
      console.log(input.slice(i, i + 4));
      markerCounter += 4;
      break;
    } else {
      markerCounter += 1;
    }
  }
  console.log(markerCounter);
};

solve();
