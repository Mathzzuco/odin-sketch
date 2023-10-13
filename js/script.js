const grid = document.querySelector(".grid");
const gridSize = document.querySelector(".grid").clientHeight;
const squaresPerSide = 16;
const numOfIterations = squaresPerSide * squaresPerSide;

// if userInput <= 0 then reset grid with same size

createGrid();

function mouseOver(e) {
  const element = e.target;
  element.style.background = "red";
}

function createGrid() {
  for (x = 0; x < numOfIterations; x++) {
    const squareSize = gridSize / squaresPerSide;

    const drawBox = document.createElement("div");
    drawBox.classList.add("draw-box");

    drawBox.style.width = squareSize + "px";
    drawBox.style.height = squareSize + "px";

    grid.appendChild(drawBox);

    const drawBoxAll = document.querySelectorAll(".draw-box");
    drawBoxAll[x].addEventListener("mouseover", mouseOver);
  }
}

function resetGrid() {
  const userInput = parseInt(prompt());
  if (userInput >= 1 && userInput <= 100) {
    const drawBoxAll = document.querySelectorAll(".draw-box");
    drawBoxAll.forEach((drawBox) => {
      drawBox.remove();
    });
    createGrid();
  }
}
