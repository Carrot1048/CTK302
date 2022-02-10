let x = 0;
let y = 0;
let font1;

function setup() {
  createCanvas(500, 500);
  // rectMode(CENTER);
  textAlign(CENTER);
  font1 = loadFont("Assets/Rubik.ttf");
}

function draw() {
  background('black');
  fill('white');
  // rect(x, y, 50, 10);
  // x+=5;
  // if(x>width){
  //   x = 0;
  //   y+=10;
  // }
  textFont(font1);
  textSize(24);
  text("I love you mom!", x, 50);
  x+=5;
  if(x>width){
    x=0;
  }
}
