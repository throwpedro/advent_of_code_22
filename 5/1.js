const path = require("path");
const fs = require("fs");

const order = [
  ["D", "T", "W", "F", "J", "S", "H", "N"],
  ["H", "R", "P", "Q", "T", "N", "B", "G"],
  ["L", "Q", "V"],
  ["N", "B", "S", "W", "R", "Q"],
  ["N", "D", "F", "T", "V", "M", "B"],
  ["M", "D", "B", "V", "H", "T", "R"],
  ["D", "B", "Q", "J"],
  ["D", "N", "J", "V", "R", "Z", "H", "Q"],
  ["B", "N", "H", "M", "S"],
];

const move = (amount, from, to) => {
  for (let i = 0; i < amount; i++) {
    const last = from.pop();
    to.push(last);
  }
};

const solve = () => {
  const instructions = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("\n");
  instructions.forEach((instruction) => {
    const amount = parseInt(instruction.split(" ")[1]);
    const from = parseInt(instruction.split(" ")[3]) - 1; // -1 because the array is 0-indexed
    const to = parseInt(instruction.split(" ")[5]) - 1; // -1 because the array is 0-indexed
    move(amount, order[from], order[to]);
  });
  console.log(order.map((o) => o.pop()).join(""));
};

solve();
