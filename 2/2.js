const fs = require("fs");

const opponentMapper = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
};

const resultMapper = {
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
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
  const inputSplit = fs.readFileSync("input.txt", "utf8").split("\n");
  inputSplit.forEach((input) => {
    const [opponentSelection, resultInput] = input.split(" ");
    const opponentShape = opponentMapper[opponentSelection];
    const resultMapped = resultMapper[resultInput];
    const opponentShapeValue = shapeValues[opponentShape];

    let selfShape = "";
    let selfShapeValue = 0;

    if (resultMapped === "DRAW") {
      selfShape = opponentShape;
    }

    if (resultMapped === "WIN") {
      switch (opponentShape) {
        case "ROCK":
          selfShape = "PAPER";
          break;
        case "PAPER":
          selfShape = "SCISSORS";
          break;
        case "SCISSORS":
          selfShape = "ROCK";
          break;
        default:
          break;
      }
    }

    if (resultMapped === "LOSE") {
      switch (opponentShape) {
        case "ROCK":
          selfShape = "SCISSORS";
          break;
        case "PAPER":
          selfShape = "ROCK";
          break;
        case "SCISSORS":
          selfShape = "PAPER";
          break;
        default:
          break;
      }
    }
    result += shapeValues[selfShape] + scoreValues[resultMapped];
  });
  console.log(result);
};

solve();
