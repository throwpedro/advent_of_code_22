const fs = require("fs");
const path = require("path");

const solve = () => {
  let markerCounter = 0;
  const input = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("");
  for (let i = 0; i < input.length - 13; i++) {
    if (
      input.slice(i, i + 14).length === new Set(input.slice(i, i + 14)).size
    ) {
      console.log(input.slice(i, i + 14));
      markerCounter += 14;
      break;
    } else {
      markerCounter += 1;
    }
  }
  console.log(markerCounter);
};

solve();
