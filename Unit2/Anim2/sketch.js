// Reed Cavi's Rain Man
let x = 0;

function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  push();
  translate(x, 0);
  x+=6;
  if(x>width){
    x = -500;
  }
  avatar();
  pop();
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
