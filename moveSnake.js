// var keyCode = "";
//s = 83
//
document.addEventListener('DOMContentLoaded', () => {
    setInterval(sendSnake, 30000);
});

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 83) {
      sendSnake()
  }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            sendSnake();
        /* left swipe */
        }
        // else {
        // /* right swipe */
        // }
     }
     // else {
    //     if ( yDiff > 0 ) {
    //     /* up swipe */
    //     } else {
    //     /* down swipe */
    //     }
    // }
    // /* reset values */
    xDown = null;
    yDown = null;
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
