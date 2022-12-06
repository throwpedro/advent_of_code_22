const fs = require("fs");
const path = require("path");

const opponentMapper = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
};

const selfMapper = {
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS",
};

const shapeValues = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const scoreValues = {
  WIN: 6,
  DRAW: 3,
  LOSE: 0,
};

const solve = () => {
  let result = 0;
  const inputSplit = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split("\n");
  inputSplit.forEach((input) => {
    const [opponentSelection, selfSelection] = input.split(" ");
    const opponentShape = opponentMapper[opponentSelection];
    const selfShape = selfMapper[selfSelection];
    const opponentShapeValue = shapeValues[opponentShape];
    const selfShapeValue = shapeValues[selfShape];

    // Draw
    if (opponentShapeValue === selfShapeValue) {
      result += selfShapeValue + scoreValues.DRAW;
    }

    // Lose
    if (opponentShape === "ROCK" && selfShape === "SCISSORS") {
      result += selfShapeValue + scoreValues.LOSE;
    }
    if (opponentShape === "PAPER" && selfShape === "ROCK") {
      result += selfShapeValue + scoreValues.LOSE;
    }
    if (opponentShape === "SCISSORS" && selfShape === "PAPER") {
      result += selfShapeValue + scoreValues.LOSE;
    }

    // Win
    if (opponentShape === "ROCK" && selfShape === "PAPER") {
      result += selfShapeValue + scoreValues.WIN;
    }
    if (opponentShape === "PAPER" && selfShape === "SCISSORS") {
      result += selfShapeValue + scoreValues.WIN;
    }
    if (opponentShape === "SCISSORS" && selfShape === "ROCK") {
      result += selfShapeValue + scoreValues.WIN;
    }
  });
  console.log(result);
};

solve();
