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
    snake.style.top = ((Math.random() * screen.height - 100) + 120) + "px";
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
