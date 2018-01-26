var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset-button");
var difficultyButtons = document.querySelectorAll(".difficulty-button");
var hardMode = true;


// easy mode
difficultyButtons[0].addEventListener("click", initiateEasy);
// hard mode
difficultyButtons[1].addEventListener("click", initiateHard);

setButtons();
initiateHard();

function setButtons() {
  //set reset button
  resetButton.addEventListener("click", function() {
    if (hardMode) {
      initiateHard();
    } else {
      initiateEasy();
    }
  });
}


function initiateEasy() {
  hardMode = false;
  difficultyButtons[0].classList.add("selected");
  difficultyButtons[1].classList.remove("selected");
  colors = generateRandomColors(3);
  pickedColor = pickRandomColor();
  setColorDisplay();
  setSquares();
  for (var i = 3; i < squares.length; i++) {
    disableSquare(squares[i]);
  }
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
}

function initiateHard() {
  hardMode = true;
  difficultyButtons[1].classList.add("selected");
  difficultyButtons[0].classList.remove("selected");
  colors = generateRandomColors(6);
  pickedColor = pickRandomColor();
  setColorDisplay();
  setSquares();
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
}

function disableSquare(square) {
  this.removeEventListener("click", this.handler);
  square.style.backgroundColor = "#232323";
}

function setColorDisplay() {
  console.log(pickedColor.toString());
  colorDisplay.textContent = pickedColor.toString();
}

function setSquares() {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i].toString();
    squares[i].classList.add("glow");
    squares[i].addEventListener("click", function handler() {
      var clickedColor = this.style.backgroundColor;
      var checkColor = pickedColor.toString();
      var isMatch = checkColors(clickedColor, checkColor);
      // Events that happen when correct
      if (isMatch === true) {
        h1.style.backgroundColor = clickedColor.toString();
        messageDisplay.textContent = "Correct";
        changeColors(pickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
        this.classList.remove("glow");
      }
    });
  }
}

function checkColors(clickedColor, checkColor) {
  if (clickedColor === checkColor) {
    return true;
  } else {
    return false;
  }
}

function changeColors(color) {
  // loop through all squares, set all to given color
  var len;
  if (hardMode) {
    len = squares.length;
  } else {
    len = squares.length - 3;
  }
  for (var i = 0; i < len; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(numOfColors) {
  console.log("lol");
  var arr = [];


  for (var i = 0; i < numOfColors; i++) {
    var tempColor = new Color(generateRGBValue(), generateRGBValue(), generateRGBValue());
    arr.push(tempColor);
  }

  console.log(arr.toString());
  return arr;
}

function generateRGBValue() {
  return Math.floor(Math.random() * 255 + 1);
}

function Color(r, g, b) {
  this.red = r;
  this.green = g;
  this.blue = b;
  this.toString = function() {
    return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
  }
}