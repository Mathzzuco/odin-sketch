const grid = document.querySelector(".grid");

const userInput = 16;
const numOfIterations = userInput * userInput;
const gridSize = 600;
const squareSize = gridSize / userInput;

for (x = 0; x < numOfIterations; x++) {
  let drawBox = document.createElement("div");
  drawBox.classList.add("draw-box");

  drawBox.style.width = squareSize + "px";
  drawBox.style.height = squareSize + "px";

  grid.appendChild(drawBox);
  let drawBoxAll = document.querySelectorAll(".draw-box");
  drawBoxAll[x].addEventListener("mouseover", mouseOver);
  drawBoxAll[x].addEventListener("mouseout", mouseOut);
}

// drawBox = document.querySelectorAll(".draw-box");

// document.querySelector(".grid div").addEventListener("mouseover", mouseOver);
// document.querySelector(".grid div").addEventListener("mouseout", mouseOut);

function mouseOver(e) {
  const element = e.target;
  element.style.background = "red";
}

function mouseOut(e) {
  const element = e.target;
  element.style.background = "white";
}
