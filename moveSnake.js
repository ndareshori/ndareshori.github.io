// var keyCode = "";
//s = 83
//
document.addEventListener('DOMContentLoaded', () => {
    setInterval(sendSnake, 30000);
});

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 83) {
      sendSnake();
  }
});

document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchmove", moveTouch, false);

var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var changeX = initialX - currentX;
  var changeY = initialY - currentY;

  if (Math.abs(changeX) > Math.abs(changeY)) {
    if (changeX > 0) {
      sendSnake();
    }
  }
  initialX = null;
  initialY = null;
};


// let counter = 0;
// function count() {
//     counter++;
//     c = document.getElementById("counter");
//     c.innerHTML = counter;
// }

function sendSnake() {
    let snake = document.createElement("img");
    snake.src = "images/snake.png";
    snake.alt = "snake";
    let addTo = document.getElementById("snakeGround");
    snake.style.top = Math.floor((Math.random() * (screen.height - 300))) + "px";
    // addTo.style.top = "20px"
    snake.style.height = '24px';
    snake.style.with = '123px';
    snake.style.position = "absolute";
    snake.style.left = "-125px";
    addTo.appendChild(snake);

    let pos = -125;
    let loop = setInterval(moveSnake, 2);
    if (pos > screen.width + 125) {
        clearInterval(loop);
        addTo.removeChild(snake)
    }

    function moveSnake() {
        snake.style.left = pos + "px";
        pos += 2;
    }
    // while pos < 1000 {
    //     snake.style.left = pos + "px";
    //     pos++;
    // }



    // var snake = document.getElementById("snake");
    //
    // snake.style.left = 100 + "px";
}
