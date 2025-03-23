const container = document.querySelector(".container");
const slider = document.querySelector(".range");
const contSize = 300;
const result = document.querySelector("p");
let currentColor = "black";
const resetBtn = document.querySelector("#reset");
const colorBtn = document.querySelector("#color");
const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#erase");

slider.addEventListener("change", () => {
  const gridNum = slider.value;
  const dimension = contSize / gridNum;
  container.innerHTML = "";
  container.style.border = "none";
  
  for(let i = 0; i < gridNum * gridNum; i++){
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.style.cssText = `width: ${dimension}px; height: ${dimension}px; border: 1px solid black; box-sizing: border-box;`;
    
    grid.addEventListener("mouseover", () => {
    if(currentColor == "rainbow") {
      grid.style.background = getRandomColor();
    }else if(currentColor == "eraser") {
      grid.style.background = "transparent";
    }else {
      grid.style.background = currentColor;
    }
    });
  };
    result.innerText = `You created a grid of dimension ${gridNum} by ${gridNum}.`
});

resetBtn.addEventListener("click", () => {
  slider.value = 1;
  container.innerHTML = "";
  result.innerText = "";
  container.style.border = "1px solid black";
});

colorBtn.addEventListener("click", () => {
  const color = prompt("Enter a valid color");
  currentColor = color ? color : "black";
});

blackBtn.addEventListener("click", () => {
  currentColor = "black";
});

rainbowBtn.addEventListener("click", () => {
  currentColor = "rainbow";
});

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

eraserBtn.addEventListener("click", () => {
  currentColor = "eraser";
})