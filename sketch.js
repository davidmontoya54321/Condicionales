function setup() {
  bgColor = color(220);
  circleColor = color(255, 0, 0);
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
}

let x = 50;
let y = 50;
let speedX = 5;
let speedY = 4;
let circleColor;
let bgColor;

function draw() {
  background(bgColor);
  fill(circleColor);
  circle(x, y, 50);

  x += speedX;
  y += speedY;

  let rebote = true;

  if (x > width - 25 || x < 25) {
    speedX = -speedX;
    changeCircleColor();
    rebote = true;
  }
  if (y > height - 25 || y < 25) {
    speedY = -speedY;
    changeCircleColor();
    rebote = true;

    if (rebote) {
      changeCircleColor();
      changeBgColor();
    }
  }
  function changeCircleColor() {
    circleColor = color(random(250), random(250), random(250));
  }
  function changeBgColor() {
    bgColor = color(random(250), random(250), random(250));
  }
}
