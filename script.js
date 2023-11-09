"use strict";
const optionButtons = document.querySelectorAll("[data-option]");
const finalCollum = document.querySelector("[data-final-collum]");
const humanScore = document.querySelector("[data-human-score]");
const computerScore = document.querySelector("[data-computer-score]");
const SELECTION = [
  {
    name: "ROCK",
    emoji: "✊",
    beats: "SCISSOR",
  },
  {
    name: "PAPER",
    emoji: "✋",
    beats: "ROCK",
  },
  {
    name: "SCISSOR",
    emoji: "✌️",
    beats: "PAPER",
  },
];

optionButtons.forEach((event) => {
  event.addEventListener("click", (e) => {
    const optionNmae = event.dataset.option;
    const humanChoise = SELECTION.find((event) => event.name === optionNmae);
    makeSelection(humanChoise);
  });
});

function makeSelection(humanChoise) {
  // console.log(humanChoise);
  const computerChoise = randomNumber();
  const humanWinner = isWinner(humanChoise, computerChoise);
  const computerWinner = isWinner(computerChoise, humanChoise);
  console.log(computerChoise);

  theWinner(computerChoise, computerWinner);
  theWinner(humanChoise, humanWinner);

  if (humanWinner) incrementScore(humanScore);
  if (computerWinner) incrementScore(computerScore);
}

function theWinner(choise, winner) {
  const div = document.createElement("div");
  div.innerText = choise.emoji;
  div.classList.add("result-option");
  if (winner) div.classList.add("winner");
  finalCollum.after(div);
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function isWinner(humanChoise, computerChoice) {
  return humanChoise.beats === computerChoice.name;
}

function randomNumber() {
  const randomNum = Math.floor(Math.random() * SELECTION.length);
  return SELECTION[randomNum];
}
