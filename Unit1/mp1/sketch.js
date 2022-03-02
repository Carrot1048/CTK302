let city;
let dark;
let grass;
let darker;
let typeface;
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);

  city = loadImage("../Images/Assets/cities.jpg");
  dark = loadImage("../Images/Assets/darkcity.jpg");
  grass = loadImage("../Images/Assets/grass.jpg");
  darker = loadImage("../Images/Assets/darkgrass.jpg");
  typeface = loadFont("../Fonts/Assets/Courgette.ttf");
}

function draw() {

  if (mouseIsPressed) {
    background(119, 147, 153);
    push();
    image(dark, 0, 0, 1000, 450);
    image(darker, 0, 430, 1000, 170);
    pop();
    push();
    noStroke();
    fill(1, 138, 20);
    quad(460, 420, 540, 420, 550, 480, 450, 480);
    pop();
    push();
    fill(0);
    stroke(66, 27, 117);
    rect(width / 2, 360, 60, 80);
    rect(515, 450, 30, 100);
    rect(485, 450, 30, 100);
    fill(1, 138, 20);
    rect(width / 2, 400, 40, 10);
    pop();
    push();
    fill(66, 27, 117);
    noStroke();
    quad(460, 420, 480, 420, 460, 480, 440, 480);
    rect(470, 370, 20, 100);
    push();
    translate(450, 350);
    rotate(45);
    rect(0, 0, 15, 50);
    pop();
    push();
    translate(425, 375);
    rotate(45);
    rect(0, 0, 15, 50);
    pop();
    pop();
    push();
    fill(66, 27, 117);
    noStroke();
    quad(520, 420, 540, 420, 560, 480, 540, 480);
    rect(530, 370, 20, 100);
    push();
    translate(550, 350);
    rotate(-45);
    rect(0, 0, 15, 50);
    pop();
    push();
    translate(575, 375);
    rotate(-45);
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
    stroke(0);
    ellipse(width / 2, 280, 70, 70);
    push();
    fill(158, 36, 93);
    noStroke();
    triangle(490, 260, 483, 280, 497, 280);
    triangle(490, 295, 483, 280, 497, 280);
    pop();
    push();
    fill(235);
    ellipse(490, 280, 10, 20);
    ellipse(510, 280, 10, 20);
    push();
    fill(0);
    stroke(0);
    triangle(490, 245, 512, 245, 501, 275);
    quad(512, 245, 526, 258, 520, 275, 504, 263);
    quad(475, 256, 490, 245, 496, 263, 480, 275);
    ellipse(492, 280, 5, 10);
    ellipse(512, 280, 5, 10);
    pop();
    push();
    stroke(158, 36, 93);
    strokeWeight(3);
    point(492, 280);
    point(512, 280);
    pop();
    fill(235);
    arc(width / 2, 300, 20, 15, 30, 150, CHORD);
    noFill();
    arc(width / 2, 295, 5, 5, -30, 120, OPEN);
    pop();
    stroke(66, 27, 117);
    arc(500, 320, 30, 30, 0, 180, OPEN);
    push();
    fill(1, 138, 20);
    stroke(66, 27, 117);
    arc(485, 500, 30, 40, 180, 0, OPEN);
    arc(515, 500, 30, 40, 180, 0, OPEN);
    push();
    fill(217, 191, 154);
    stroke(0);
    push();
    translate(585, 385);
    rotate(-45);
    arc(0, 0, 20, 30, 0, 180, OPEN);
    pop();
    push();
    translate(595, 380);
    rotate(255);
    rect(0, 0, 5, 10);
    pop();
    pop();
    push();
    fill(217, 191, 154);
    stroke(0);
    push();
    translate(415, 385);
    rotate(45);
    arc(0, 0, 20, 30, 0, 180, OPEN);
    pop();
    push();
    translate(405, 380);
    rotate(-255);
    rect(0, 0, 5, 10);
    pop();
    pop();
    push();
    stroke(235);
    textFont(typeface);
    textSize(16);
    fill(235);
    text("He is actually harboring a secret. Behind all of those generic attributes, he actually has superhuman abilities. He can create and control chemical reactions. You know all those things you learned in Chemistry then you forgot, well he didn't. Is he the only one, or are there many other superhuman teenagers out there?", width / 2, 125, 800, 200);
    pop();
    push();
    let t = frameCount / 60; // update time
    stroke(100, 75);
    fill(235, 25);
    // create a random number of snowflakes each frame
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflake()); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      flake.update(t); // update snowflake position
      flake.display(); // draw snowflake
    }
    pop();
  } else {
    background(119, 147, 153);
    stroke(0);
    push();
    image(city, 0, 0, 1000, 450);
    image(grass, 0, 430, 1000, 170);
    pop();
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
    push();
    textFont(typeface);
    textSize(16);
    fill(0);
    text("What most people see when they look at Orion is an ordinary teenager who is not all that impressive. He is intelligent, but not Albert Einstein. He is fit, but not athletic. He is small, but not tiny. In fact, he is pretty much like you and me... Or at least, that's what everybody thinks.", width / 2, 125, 800, 200);
    pop();
  }
}
// Code from https://p5js.org/examples/simulate-snowflakes.html.
// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * 180);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function mouseReleased() {
  print(mouseX + ', ' + mouseY);
}
