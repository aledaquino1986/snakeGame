const grid = document.querySelector(".grid");
const startButton = document.querySelector("#start");
const score = document.getElementById("score");
let squares = [];

let currentSnake = [2, 1, 0];
let direction = 1;

function createGrid() {
  //create 100 of these elements with a for loop

  for (let i = 0; i < 100; i++) {
    //create element
    const square = document.createElement("div");

    //add styling to the element
    square.classList.add("square");
    //put the element into our grid
    grid.appendChild(square);
    //push it into a new squares array
    squares.push(square);
  }
}

createGrid();

currentSnake.forEach(index => squares[index].classList.add("snake"));

function move() {
  //remove last element from our currentSnake array.
  const tail = currentSnake.pop();

  //remove the styling as well from last element.
  squares[tail].classList.remove("snake");
  // we need to add a square in direction we are heading and add styling so we can see it.
  currentSnake.unshift(currentSnake[0] + direction);

  squares[currentSnake[0]].classList.add("snake");
}

let timerId = setInterval(() => {
  move();
}, 1000);

function control(e) {
  if (e.keyCode === 39) {
    console.log("right pressed");
  } else if (e.keyCode === 38) {
    console.log("up arrow pressed");
  } else if (e.keyCode === 37) {
    console.log("left arrow pressed");
  } else if (e.keyCode === 40) {
    console.log("down arrow pressed");
  }
}

document.addEventListener("keyup", e => {
  control(e);
});
