// Find the combined calories of the 3 elves carrying the most calories. How many total calories is that?

const fs = require("fs");
const path = require("path");
fs.readFile(path.resolve(__dirname, "input.txt"), (err, input) => {
  if (err) throw err;
  const split = input.toString().split("\n\n");
  elves = split.map((item) => item.split("\n"));
  let max = {
    top1: 0,
    top2: 0,
    top3: 0,
  };
  elves.map((elf) => {
    let count = 0;
    elf.forEach((element) => {
      count += parseInt(element);
    });
    if (count > max.top1) {
      max.top3 = max.top2;
      max.top2 = max.top1;
      max.top1 = count;
    }
    if (count > max.top2 && count < max.top1) {
      max.top3 = max.top2;
      max.top2 = count;
    }
    if (count > max.top3 && count < max.top2) {
      max.top3 = count;
    }
  });
  console.log("\n");
  console.log(max.top1 + max.top2 + max.top3);
});
