const grid = document.querySelector(".grid");
const startButton = document.querySelector("#start");
const score = document.getElementById("score");
let squares = [];

let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;

function createGrid() {
  //create 100 of these elements with a for loop

  for (let i = 0; i < width * width; i++) {
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
  if (
    // //if snake has hit bottom
    (currentSnake[0] + width >= width * width && direction === width) ||
    // if snake has hit right wall
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    // if snake has hit left wall
    (currentSnake[0] % width === 0 && direction === -1) ||
    // if snake has hit top
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    return clearInterval(timerId);
  }

  //remove last element from our currentSnake array.
  const tail = currentSnake.pop();

  //remove the styling as well from last element.
  squares[tail].classList.remove("snake");
  // we need to add a square in direction we are heading and add styling so we can see it.
  currentSnake.unshift(currentSnake[0] + direction);

  //deal with snake head getting the apple

  if (squares[currentSnake[0]].classList.contains("apple")) {
    //remove the class of apple

    squares[currentSnake[0]].classList.remove("apple");

    // grow our snake by adding class of snake to it

    //grow our snake array

    //generate a new apple

    //add one to the score

    //speed up our snake
  }

  squares[currentSnake[0]].classList.add("snake");
}

let timerId = setInterval(() => {
  move();
}, 1000);

function generateApples() {
  do {
    //generate a random number
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  {
    squares[appleIndex].classList.add("apple");
  }
}

generateApples();

function control(e) {
  if (e.keyCode === 39) {
    console.log("right pressed");
    direction = 1;
  } else if (e.keyCode === 38) {
    console.log("up arrow pressed");
    direction = -width;
  } else if (e.keyCode === 37) {
    console.log("left arrow pressed");
    direction = -1;
  } else if (e.keyCode === 40) {
    console.log("down arrow pressed");
    direction = +width;
  }
}

document.addEventListener("keyup", e => {
  control(e);
});
