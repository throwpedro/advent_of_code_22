const path = require("path");
const fs = require("fs");

const solve = () => {
  let overlapCounter = 0;
  const lines = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("\n");
  const pairs = lines.map((line) => {
    const [first, second] = line.split(",");
    const [firstTaskStart, firstTaskEnd] = first.split("-");
    const [secondTaskStart, secondTaskEnd] = second.split("-");

    if (
      (parseInt(firstTaskStart) <= parseInt(secondTaskStart) &&
        parseInt(firstTaskEnd) >= parseInt(secondTaskEnd)) ||
      (parseInt(secondTaskStart) <= parseInt(firstTaskStart) &&
        parseInt(secondTaskEnd) >= parseInt(firstTaskEnd))
    ) {
      overlapCounter++;
    }
  });
  console.log(overlapCounter);
};

solve();
