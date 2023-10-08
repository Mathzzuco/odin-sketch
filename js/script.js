const container = document.querySelector("#container");

let userInput = 16;
let numOfIterations = userInput * userInput;

for (x = 0; x < numOfIterations; x++) {
  const drawBox = document.createElement("div");
  drawBox.classList.add("draw-box");
  container.appendChild(drawBox);
}
