var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var limitDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var limit = 5;

p1Button.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    if(p1Score === limit) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if(p2Score === limit) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
  }
});

reset.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
});

numInput.addEventListener("change", function() {
  limit = parseInt(numInput.value);
  limitDisplay.textContent = limit;
});
