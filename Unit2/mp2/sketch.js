let table;
let state = 0;
let timer = 0;

function preload() {
  table = loadImage("Assets/Table.jpg");
}

function setup() {
  createCanvas(500, 500);

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  textSize(20);
}

function draw() {
  background(112, 196, 116);
  //Background pattern
  for (var j = 0; j < 100; j++) {
    fill(random(255), random(255), random(255), 0);
    for (var i = 0; i < 100; i++) {
      fill(random(255), random(255), random(255), 0);
      rect(i * 100, j * 100, 100, 100);
    }
  }
  //Table image
  image(table, width / 2, height - 100, 500, 200);
  //Switch State
  switch(state) {

    case 0:
      push();
      fill(255);
      text("So how are you feeling today? Do you need some tea?", 250, 100);
      fill(255);
      text("Click the screen to prepare it!", 250, 200);
      pop();
      //Background rectangle
      fill(155);
      rect(width / 2, height - 175, 101, 51);
      //Rectangle (Cylinder part of pot) + Bottom of pot
      push();
      noStroke();
      rect(width / 2, height - 175, 100, 50);
      stroke(0);
      arc(width / 2, height - 150, 100, 50, 0, PI, OPEN);
      pop();
      //Top of pot (Opacity lower)
      push();
      fill(155, 75);
      ellipse(width / 2, height - 200, 100, 50);
      pop();
      break;

    case 1:
      push();
      fill(255);
      fill(255);
      text("Your tea is preparing!", 250, 200);
      pop();
      fill(155);
      rect(width / 2, height - 175, 101, 51);
      push();
      noStroke();
      rect(width / 2, height - 175, 100, 50);
      stroke(0);
      arc(width / 2, height - 150, 100, 50, 0, PI, OPEN);
      pop();
      push();
      fill(155, 75);
      ellipse(width / 2, height - 200, 100, 50);
      pop();
      push();
      noStroke();
      fill(155, 50);
      ellipse(width/2, height/2, 50, 50);
      pop();
      //timer
      timer++;
      if(timer > 3*60){
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      break;
  }
}

function mouseReleased() {
  if(mouseReleased){
  state = (state + 1) % 3
  }
}
