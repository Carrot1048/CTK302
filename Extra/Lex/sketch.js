let washed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  washed = loadImage("Assets/Washed.png");
}

function draw() {
  background(120, 148, 161);
  //Arms
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2+15, height/2+28.5);
  rotate(-PI/4);
  fill(40, 51, 69);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2-30, height/2+15);
  rotate(PI/4);
  fill(40, 51, 69);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2-65, height/2+51.25);
  rotate(-PI/4);
  fill(40, 51, 69);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2+52.5, height/2+37.75);
  rotate(PI/4);
  fill(40, 51, 69);
  rect(0, 0, 20, 50);
  pop();
  //Pants(Legs)
  fill(255);
  rect(width/2-15, height/2+130, 30, 90);
  rect(width/2+15, height/2+130, 30, 90);
  tint('teal');
  image(washed, width/2-15, height/2+130, 30 ,90);
  image(washed, width/2+15, height/2+130, 30 ,90);
  line(width/2, height/2+85, width/2, height/2+175);
  push();
  noStroke();
  fill(117, 68, 30);
  rect(width/2, height/2+88.75, 60, 7.5);
  fill(155);
  rect(width/2, height/2+88.75, 10, 7.5);
  pop();
  //Shoes
  fill(56, 72, 97);
  arc(width/2-15, height/2+175, 30, 40, PI, 0, CHORD);
  arc(width/2+15, height/2+175, 30, 40, PI, 0, CHORD);
  //Shirt(Body)
  fill(50);
  rect(width/2, height/2+50, 60, 70);
  //Jacket
  push();
  noStroke();
  fill(40, 51, 69);
  rect(width/2-23, height/2+64, 15, 100);
  rect(width/2+23, height/2+64, 15, 100);
  pop();
  line(width/2-15, height/2+14, width/2-15, height/2+114);
  line(width/2+15, height/2+14, width/2+15, height/2+114);
  //Neck
  push();
  noStroke();
  fill(240, 211, 170);
  quad(width/2-10, height/2+5, width/2+10, height/2+5, width/2+15, height/2+15, width/2-15, height/2+15);
  pop();
  //Collar
  push();
  noStroke();
  fill(240, 211, 170);
  triangle(width/2-15, height/2+15, width/2+15, height/2+15, width/2, height/2+30);
  pop();
  line(width/2-15, height/2+15, width/2, height/2+30);
  line(width/2+15, height/2+15, width/2, height/2+30);
  //Head
  fill(240, 211, 170);
  ellipse(width/2, height/2-30, 70, 75);
  fill(255);
  ellipse(width/2-10, height/2-30, 10, 15);
  ellipse(width/2+10, height/2-30, 10, 15);
  //Pupils
  push();
  noStroke();
  fill(126, 168, 214);
  ellipse(width/2-10, height/2-33, 5, 8);
  fill(56, 168, 74);
  ellipse(width/2+10, height/2-33, 5, 8);
  pop();
  //Mouth
  push();
  noFill();
  line(width/2-5, height/2-2.5, width/2+5, height/2-2.5);
  //Nose
  arc(width/2, height/2-15, 5, 5, -PI/6, 4*PI/6, OPEN);
  pop();
  //Hair
  push();
  noStroke();
  fill(156, 153, 117);
  triangle(width/2+5, height/2-20, width/2+15, height/2-50, width/2-5, height/2-50);
  triangle(width/2-5, height/2-30, width/2+5, height/2-50, width/2-15, height/2-50);
  triangle(width/2+15, height/2-25, width/2+25, height/2-50, width/2, height/2-50);
  triangle(width/2-15, height/2-40, width/2-5, height/2-50, width/2-25, height/2-50);
  triangle(width/2-20, height/2-45, width/2-10, height/2-50, width/2-30, height/2-50);
  triangle(width/2+20, height/2-45, width/2+10, height/2-50, width/2+30, height/2-50);
  arc(width/2, height/2-30, 72.5, 77.5, 7*PI/6, -PI/6, OPEN);
  pop();

}

function mouseReleased() {
  print(mouseX + ', ' + mouseY);
}
