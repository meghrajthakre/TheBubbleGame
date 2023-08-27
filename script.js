var scorern = 0;
var timer = 3;

function bubbleFunction() {
  var clutter = "";

  for (var i = 0; i <= 140; i++) {
    var rd = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rd}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let runtimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerr").innerText = timer;
    } else {
      clearInterval(runtimer);
      document.querySelector("#pbtm").innerHTML = "<h1> Game Over</h1>";
    }
  }, 1000);
}

function scoreHit() {
  scorern = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").innerText = scorern;
}

var score = 0;

function addingScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (a) {
  var compareNum = Number(a.target.textContent);

  if (compareNum === scorern) {
    addingScore();
    scoreHit();
    bubbleFunction();
  }
});

scoreHit();
bubbleFunction();
runTimer();
bubbleFunction();
