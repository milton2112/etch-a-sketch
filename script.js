const container = document.getElementById("container");

// grilla
function createGrid(size) {
  container.innerHTML = ""; 
  const squareSize = 960 / size; 

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)})`;
  square.style.backgroundColor = randomColor;
});

    container.appendChild(square);
  }
}

createGrid(16);

// botón para crear nueva grilla
const newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click", () => {
  let userSize = parseInt(prompt("Enter grid size (max 100):"));
  if (userSize > 100) userSize = 100;
  if (userSize && userSize > 0) {
    createGrid(userSize);
  } else {
    alert("Invalid size!");
  }
});