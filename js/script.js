let squaresPerSide = 16;
let isGridBlocked = false;

function generateRandomColor() {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);

  return {
    red: random1,
    green: random2,
    blue: random3,
  };
}

createGrid();

function mouseOver(e) {
  if (isGridBlocked) return;
  const element = e.target;
  const randomColor = generateRandomColor();
  element.style.background = `rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue})`;
}

function unblockGrid() {
  isGridBlocked = false;
}

function setupUnblockGridEvents() {
  const elements = document.querySelectorAll("#container, .buttons");

  elements.forEach(function (element) {
    element.removeEventListener("mouseenter", unblockGrid);
    element.addEventListener("mouseenter", unblockGrid);
  });
}

function createGrid() {
  setupUnblockGridEvents();

  const grid = document.querySelector(".grid");
  const gridSize = document.querySelector(".grid").clientHeight;
  const numOfIterations = squaresPerSide * squaresPerSide;

  for (x = 0; x < numOfIterations; x++) {
    const squareSize = gridSize / squaresPerSide;

    const drawBox = document.createElement("div");
    drawBox.classList.add("draw-box");

    drawBox.style.width = squareSize + "px";
    drawBox.style.height = squareSize + "px";

    drawBox.addEventListener("mouseenter", mouseOver);
    drawBox.removeEventListener("mouseout", unblockGrid);

    grid.appendChild(drawBox);
  }
}

function resetGrid() {
  const drawBoxAll = document.querySelectorAll(".draw-box");
  drawBoxAll.forEach((drawBox) => {
    drawBox.remove();
  });
  createGrid();
}

function newGrid() {
  const userInput = parseInt(prompt("Choose the amount of squares per side."));
  isGridBlocked = true;
  if (userInput >= 1 && userInput <= 100) {
    squaresPerSide = userInput;
    resetGrid();
  } else {
    alert(
      "Invalid number. The number can't be lower than 1 or higher than 100."
    );
  }
}
