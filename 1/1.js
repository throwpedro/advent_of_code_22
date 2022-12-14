// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

const fs = require("fs");
const path = require("path");
fs.readFile(path.resolve(__dirname, "input.txt"), (err, input) => {
  if (err) throw err;
  const split = input.toString().split("\n\n");
  elves = split.map((item) => item.split("\n"));
  let max = 0;
  elves.map((elf) => {
    //console.log('\n')
    let count = 0;
    elf.forEach((element) => {
      count += parseInt(element);
    });
    if (count > max) {
      max = count;
    }
  });
  console.log(max);
});
