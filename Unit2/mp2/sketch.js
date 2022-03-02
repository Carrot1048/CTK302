let table;
let stove;
let honey;
let mint;
let tea;
let state = 0;
let timer = 0;
let mic;
let volume = 0;
let loudest = 0.2;
let x = 0;

function preload() {
  table = loadImage("Assets/Table.jpg");
  stove = loadImage("Assets/Stove.jpg");
  honey = loadImage("Assets/Honey.jpg");
  mint = loadImage("Assets/Mint.jpg");
  tea = loadImage("Assets/Tea.jpg");
}

function setup() {
  createCanvas(1000, 600);

  //Input sound
  mic = new p5.AudioIn();
  mic.start();

  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  textSize(20);
}

function draw() {
  background(255);
  //Get sound
  vol = mic.getLevel();
  //Switch State
  switch (state) {

    case 0:
      background(102, 217, 100);
      //Background pattern
      for (var j = 0; j < 100; j++) {
        fill(155, 50);
        for (var i = 0; i < 100; i++) {
          fill(155, 50);
          rect(i * 30, j * 40, 30, 30);
        }
      }
      //Table image
      image(table, width / 2, height - 110, width, 220);
      push();
      fill(255);
      text("So how are you feeling today? Do you need some tea?", width / 2, 120, 800, 120);
      fill(255);
      text("Click the screen to prepare the water!", width / 2, 200, 400, 200);
      pop();
      //Background rectangle
      fill(155);
      rect(width / 2, height - 175, 101, 51);
      //Rectangle (Cylinder part of pot) + Bottom of pot
      push();
      noStroke();
      rect(width / 2, height - 175, 100, 50);
      stroke(0);
      arc(width / 2, height - 150, 100, 50, 0, 180, OPEN);
      pop();
      //Top of pot (Opacity lower)
      push();
      fill(114, 132, 163, 80);
      ellipse(width / 2, height - 200, 100, 50);
      pop();
      break;

    case 1:
      background(48, 70, 94);
      //Background pattern
      for (var j = 0; j < 100; j++) {
        fill(155, 50);
        for (var i = 0; i < 100; i++) {
          fill(155, 50);
          ellipse(i * 50, j * 60, 30, 30);
        }
      }
      //Stove image
      image(stove, width / 2, height - 75, width, 200);
      push();
      fill(255);
      fill(random(255), random(255), random(255));
      text("Your water is boiling!", width / 2, 200, 250, 200);
      pop();
      //Pot
      fill(155);
      rect(width / 2 - 10, height - 125, 101, 51);
      push();
      noStroke();
      rect(width / 2 - 10, height - 125, 100, 50);
      stroke(0);
      arc(width / 2 - 10, height - 100, 100, 50, 0, 180, OPEN);
      pop();
      //Top of pot
      push();
      fill(114, 132, 163, 80);
      ellipse(width / 2 - 10, height - 150, 100, 50);
      pop();
      //Boiling water
      push();
      stroke(255, 50);
      fill(114, 132, 163, 50);
      arc(width / 2 - 10, height / 2 + 140, 10, 10, 180, 0, CHORD);
      arc(width / 2 + 2, height / 2 + 140, 5, 12, 180, 0, CHORD);
      arc(width / 2 + 26, height / 2 + 140, 12, 16, 180, 0, CHORD);
      arc(width / 2 - 6, height / 2 + 135, 5, 8, 180, 0, CHORD);
      arc(width / 2 - 20, height / 2 + 142, 16, 20, 180, 0, CHORD);
      arc(width / 2 - 30, height / 2 + 136, 8, 14, 180, 0, CHORD);
      arc(width / 2 - 36, height / 2 + 144, 12, 12, 180, 0, CHORD);
      arc(width / 2 - 16, height / 2 + 125, 4, 6, 180, 0, CHORD);
      arc(width / 2 + 14, height / 2 + 134, 10, 15, 180, 0, CHORD);
      arc(width / 2 + 10, height / 2 + 145, 13, 18, 180, 0, CHORD);
      pop();
      //timer
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background(232, 165, 207);
      //Background pattern
      for (var j = 0; j < 100; j++) {
        fill(155, 50);
        for (var i = 0; i < 100; i++) {
          fill(155, 50);
          push();
          rotate(45);
          translate(0, -750);
          rect(i * 30, j * 40, 30, 30);
          pop();
        }
      }
      //Table image
      image(table, width / 2, height - 110, width, 220);
      push();
      fill(97, 255, 113);
      text("Now cheer cause your water is done boiling! Now mix in your other ingredients.", width / 2, 200, 400, 200);
      pop();
      //Background rectangle
      fill(155);
      rect(width / 2, height - 175, 101, 51);
      //Rectangle (Cylinder part of pot) + Bottom of pot
      push();
      noStroke();
      rect(width / 2, height - 175, 100, 50);
      stroke(0);
      arc(width / 2, height - 150, 100, 50, 0, 180, OPEN);
      pop();
      //Top of pot (Opacity lower)
      push();
      fill(114, 132, 163, 80);
      ellipse(width / 2, height - 200, 100, 50);
      pop();
      image(honey, width / 2 + 150, height - 160, 75, 100);
      image(mint, width / 2 - 150, height - 160, 75, 100);
      image(tea, width / 2, height - 60, 60, 60);
      if (vol > loudest) {
        state = 3;
      }
      break;

    case 3:
      background(212, 78, 78);
      //Background pattern
      for (var j = 0; j < 100; j++) {
        fill(155, 50);
        for (var i = 0; i < 100; i++) {
          fill(155, 50);
          push();
          rotate(30);
          translate(0, -500);
          ellipse(i * 15, j * 50, 80, 100);
          pop();
        }
      }
      push();
      translate(x, 0);
      avatar();
      x+=20;
      if(x>width/2+50){
        x = -450;
      }
      pop();
      fill(255);
      text("Drink up!", width / 2, 120, 250, 120);
      //Table image
      image(table, width / 2, height - 110, width, 220);
      break;
  }
}

function mouseReleased() {
  if (mouseReleased) {
    state = (state + 1) % 4
  }
}

function avatar() {
  stroke(0);
  push();
  noStroke();
  fill(99, 99, 98);
  quad(460, 420, 540, 420, 550, 480, 450, 480);
  pop();
  push();
  fill(1, 138, 20);
  rect(width / 2, 360, 60, 80);
  rect(515, 450, 30, 100);
  rect(485, 450, 30, 100);
  fill(99, 99, 98);
  rect(width / 2, 400, 40, 10);
  pop();
  push();
  fill(0);
  noStroke();
  quad(460, 420, 480, 420, 460, 480, 440, 480);
  rect(470, 370, 20, 100);
  push();
  translate(450, 350);
  rotate(45);
  rect(0, 0, 15, 50);
  pop();
  push();
  translate(450, 375);
  rotate(-45);
  rect(0, 0, 15, 50);
  pop();
  pop();
  push();
  fill(0);
  noStroke();
  quad(520, 420, 540, 420, 560, 480, 540, 480);
  rect(530, 370, 20, 100);
  push();
  translate(550, 350);
  rotate(-45);
  rect(0, 0, 15, 50);
  pop();
  push();
  translate(550, 375);
  rotate(45);
  rect(0, 0, 15, 50);
  pop();
  pop();
  push();
  fill(217, 191, 154);
  noStroke();
  quad(495, 310, 505, 310, 510, 318, 490, 318);
  quad(490, 318, 510, 318, 515, 320, 485, 320);
  pop();
  fill(217, 191, 154);
  ellipse(width / 2, 280, 70, 70);
  push();
  fill(235);
  ellipse(490, 280, 10, 20);
  ellipse(510, 280, 10, 20);
  push();
  fill(0);
  triangle(490, 245, 512, 245, 501, 275);
  quad(512, 245, 526, 258, 520, 275, 504, 263);
  quad(475, 256, 490, 245, 496, 263, 480, 275);
  ellipse(490, 285, 5, 10);
  ellipse(510, 285, 5, 10);
  pop();
  noFill();
  arc(width / 2, 300, 20, 15, 30, 150, OPEN);
  arc(width / 2, 295, 5, 5, -30, 120, OPEN);
  pop();
  arc(500, 320, 30, 30, 0, 180, OPEN);
  push();
  fill(66, 27, 117);
  arc(485, 500, 30, 40, 180, 0, OPEN);
  arc(515, 500, 30, 40, 180, 0, OPEN);
  pop();
}

function touchStarted() {
  getAudioContext().resume();
}
