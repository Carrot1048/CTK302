/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
let bunnyImage;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data
let pix;

function setup() {

  createCanvas(windowWidth, windowHeight);



  bunnyImage = loadImage("Assets/BigO-Camo.jpg");
  pix = loadFont("Assets/Pixel.ttf")
  imageMode(CENTER);
  rectMode(CENTER);
  textFont(pix);

}

function draw() {

  background(204, 167, 193); // light pink

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake
  if(alpha>0&&alpha<=60){
    tint("red");
  }
  if(alpha>60&&alpha<=120){
    tint("orange");
  }
  if(alpha>120&&alpha<=180){
    tint("yellow");
  }
  if(alpha>180&&alpha<=240){
    tint("green");
  }
  if(alpha>240&&alpha<=300){
    tint("blue");
  }
  if(alpha>300&&alpha<=360){
    tint("purple");
  }
  image(bunnyImage, 0, 0, 500, 500);
  // rect(0, 0, 100, 100) ;
  pop();


  // // Text commands that display debugging data
  // textAlign(LEFT);
  // textSize(20);
  // fill('black');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y.toFixed(2), 25, 170);
  // text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  push();
  textAlign(CENTER);
  rotate(radians(alpha));
  translate(width/2, height/2);
  fill('white');
  noStroke();
  if(alpha>0&&alpha<=60){
    textSize(250);
    text("Have", 0, 0);
  }
  if(alpha>60&&alpha<=120){
    textSize(200);
    text("a", 0, 0);
  }
  if(alpha>120&&alpha<=180){
    textSize(150);
    text("nice", 0, 0);
  }
  if(alpha>180&&alpha<=240){
    textSize(150);
    text("and", 0, 0);
  }
  if(alpha>240&&alpha<=300){
    textSize(100);
    text("stupendous", 0, 0);
  }
  if(alpha>300&&alpha<=360){
    textSize(250);
    text("day!", 0, 0);
  }
  pop();

}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
