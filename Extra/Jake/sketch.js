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
  fill(51, 104, 138);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2-30, height/2+15);
  rotate(PI/4);
  fill(51, 104, 138);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2-65, height/2+51.25);
  rotate(-PI/4);
  fill(51, 104, 138);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2+52.5, height/2+37.75);
  rotate(PI/4);
  fill(51, 104, 138);
  rect(0, 0, 20, 50);
  pop();
  //Pants(Legs)
  fill(255);
  rect(width/2-15, height/2+140, 30, 110);
  rect(width/2+15, height/2+140, 30, 110);
  image(washed, width/2-15, height/2+140, 30 ,110);
  image(washed, width/2+15, height/2+140, 30 ,110);
  line(width/2, height/2+85, width/2, height/2+195);
  push();
  noStroke();
  fill(0);
  rect(width/2, height/2+98.75, 60, 7.5);
  fill('lavender');
  rect(width/2, height/2+98.75, 10, 7.5);
  pop();
  //Shoes
  fill('lavender');
  arc(width/2-15, height/2+195, 30, 40, PI, 0, CHORD);
  arc(width/2+15, height/2+195, 30, 40, PI, 0, CHORD);
  //Shirt(Body)
  fill(255);
  rect(width/2, height/2+55, 60, 80);
  //Jacket
  push();
  noStroke();
  fill(51, 104, 138);
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
  fill(86, 142, 204);
  ellipse(width/2-7.5, height/2-30, 5, 8);
  ellipse(width/2+12.5, height/2-30, 5, 8);
  pop();
  //Mouth
  push();
  noFill();
  arc(width/2, height/2-5, 15, 7.5, PI/6, 5*PI/6, OPEN);
  //Nose
  arc(width/2, height/2-15, 5, 5, -PI/6, 4*PI/6, OPEN);
  pop();
  //Hair
  push();
  noStroke();
  fill(240, 236, 182);
  quad(width/2-35, height/2-40, width/2+5, height/2-50, width/2+20, height/2-60, width/2-25, height/2-65);
  quad(width/2+35, height/2-40, width/2-5, height/2-50, width/2-20, height/2-60, width/2+25, height/2-65);
  triangle(width/2-15, height/2-60, width/2+20, height/2-80, width/2+15, height/2-60);
  triangle(width/2-20, height/2-60, width/2-15, height/2-75, width/2+20, height/2-55);
  triangle(width/2-25, height/2-40, width/2-45, height/2-60, width/2-20, height/2-60);
  triangle(width/2+25, height/2-40, width/2+45, height/2-60, width/2+20, height/2-60);
  triangle(width/2-10, height/2-50, width/2+5, height/2-30, width/2, height/2-50);
  triangle(width/2-10, height/2-50, width/2-25, height/2-30, width/2-15, height/2-50);
  triangle(width/2+10, height/2-50, width/2+25, height/2-30, width/2+15, height/2-50);
  pop();

}

function mouseReleased() {
  print(mouseX + ', ' + mouseY);
}
