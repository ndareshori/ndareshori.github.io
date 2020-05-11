// var keyCode = "";
//s = 83

//Call sendSnake() every 60 seconds
document.addEventListener('DOMContentLoaded', () => {
    setInterval(sendSnake, 60000);
});

//Call sendSnake() when "s" key is pressed
document.addEventListener('keyup', (e) => {
  if (e.keyCode === 83) {
      sendSnake();
  }
});

//Call sendSnake() when the user swipes right (mobile)
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
    if (changeX < 0) {
      sendSnake();
    }
  }
  initialX = null;
  initialY = null;
};



//Sends a snake across the screen
function sendSnake() {
    let snake = document.createElement("img");
    snake.src = "images/snake.png";
    snake.alt = "snake";
    let addTo = document.getElementById("snakeGround");
    snake.style.top = Math.floor((Math.random() * (screen.height - 300))) + "px";
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

}

//Tracks how many times user has visited site and thanks them on their 100th visit.
if (!localStorage.getItem('visits')) {
    localStorage.setItem('visits', 1);
} else {
    let visits = localStorage.getItem('visits');
    visits++;
    if (visits === 100) {
        alert("This is your 100th time visiting this website!!! Thank you so much for your continuous support!")
    }
    localStorage.setItem('visits', visits);
}
