let camo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  camo = loadImage("Camo.png");
}

function draw() {
  background(120, 148, 161);
  //Arms
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2+15, height/2+28.5);
  rotate(-PI/4);
  fill(240, 211, 170);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2-30, height/2+15);
  rotate(PI/4);
  fill(240, 211, 170);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2-65, height/2+51.25);
  rotate(-PI/4);
  fill(240, 211, 170);
  rect(0, 0, 20, 50);
  pop();
  push();
  noStroke();
  rectMode(CORNER);
  translate(width/2+52.5, height/2+37.75);
  rotate(PI/4);
  fill(240, 211, 170);
  rect(0, 0, 20, 50);
  pop();
  //Pants(Legs)
  fill(50);
  rect(width/2-15, height/2+130, 30, 90);
  rect(width/2+15, height/2+130, 30, 90);
  fill(240, 211, 170);
  ellipse(width/2-15, height/2+130, 15, 10);
  ellipse(width/2-15, height/2+140, 15, 7.5);
  ellipse(width/2+15, height/2+130, 15, 10);
  ellipse(width/2+15, height/2+140, 15, 7.5);
  push();
  noStroke();
  fill(155);
  rect(width/2, height/2+98.75, 60, 7.5);
  fill(0);
  rect(width/2, height/2+98.75, 10, 7.5);
  pop();
  //Boots
  push();
  fill(30);
  rect(width/2-15, height/2+185, 30, 40);
  rect(width/2+15, height/2+185, 30, 40);
  pop();
  fill(0);
  arc(width/2-15, height/2+210, 30, 40, PI, 0, CHORD);
  arc(width/2+15, height/2+210, 30, 40, PI, 0, CHORD);
  //Shirt(Body)
  fill(38, 94, 46);
  rect(width/2, height/2+55, 60, 80);
  image(camo, width/2, height/2+55, 60, 80);
  fill(155);
  rect(width/2-17.5, height/2+50, 5, 70);
  rect(width/2+17.5, height/2+50, 5, 70);
  fill(55);
  triangle(width/2-22.5, height/2+95, width/2-17.5, height/2+80, width/2-12.5, height/2+95);
  triangle(width/2+22.5, height/2+95, width/2+17.5, height/2+80, width/2+12.5, height/2+95);
  //Neck
  push();
  noStroke();
  fill(240, 211, 170);
  quad(width/2-10, height/2+5, width/2+10, height/2+5, width/2+15, height/2+15, width/2-15, height/2+15);
  pop();
  push();
  noFill();
  strokeWeight(3);
  stroke(75);
  arc(width/2, height/2+10, 25, 5, 0, PI, OPEN);
  pop();
  //Collar
  fill(240, 211, 170);
  arc(width/2, height/2+15, 30, 25, 0, PI, OPEN);
  //Head
  fill(240, 211, 170);
  ellipse(width/2, height/2-30, 70, 75);
  fill(255);
  ellipse(width/2-10, height/2-30, 10, 15);
  ellipse(width/2+10, height/2-30, 10, 15);
  //Pupils
  push();
  noStroke();
  fill(22, 115, 28);
  ellipse(width/2-10, height/2-27, 5, 8);
  ellipse(width/2+10, height/2-27, 5, 8);
  pop();
  //Mouth
  push();
  noFill();
  arc(width/2, height/2-5, 15, 7.5, PI/12, 11*PI/12, OPEN);
  //Nose
  arc(width/2, height/2-15, 5, 5, 0, 4*PI/6, OPEN);
  pop();
  //Hair
  push();
  noStroke();
  fill(135, 45, 45);
  triangle(width/2-10, height/2-50, width/2, height/2-75, width/2+10, height/2-50);
  triangle(width/2-20, height/2-50, width/2-10, height/2-75, width/2, height/2-50);
  triangle(width/2-30, height/2-50, width/2-20, height/2-75, width/2-10, height/2-50);
  triangle(width/2, height/2-50, width/2+10, height/2-75, width/2+20, height/2-50);
  triangle(width/2+10, height/2-50, width/2+20, height/2-75, width/2+30, height/2-50);
  triangle(width/2-20, height/2-50, width/2-10, height/2-40, width/2, height/2-60);
  triangle(width/2-10, height/2-60, width/2, height/2-30, width/2+10, height/2-60);
  triangle(width/2, height/2-60, width/2+10, height/2-40, width/2+20, height/2-50);
  triangle(width/2-30, height/2-50, width/2-20, height/2-40, width/2-10, height/2-60);
  triangle(width/2+10, height/2-60, width/2+20, height/2-40, width/2+30, height/2-50);
  rect(width/2, height/2-65, 40, 10);
  triangle(width/2-30, height/2-50, width/2-50, height/2-70, width/2-20, height/2-60);
  triangle(width/2-30, height/2-50, width/2-35, height/2-80, width/2-15, height/2-70);
  triangle(width/2+30, height/2-50, width/2+50, height/2-70, width/2+20, height/2-60);
  triangle(width/2+30, height/2-50, width/2+35, height/2-80, width/2+15, height/2-70);
  triangle(width/2-20, height/2-70, width/2-20, height/2-85, width/2-10, height/2-70);
  triangle(width/2+20, height/2-70, width/2+20, height/2-85, width/2+10, height/2-70);
  triangle(width/2-10, height/2-70, width/2, height/2-90, width/2+10, height/2-70);
  pop();

}

function mouseReleased() {
  print(mouseX + ', ' + mouseY);
}
