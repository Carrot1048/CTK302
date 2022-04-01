let numbers = []; //initializing an array
let robPos ; //having the x and y variables
let state = 0 ; //state variable for switch - case
let timer = 0 ;
let maxCars = 2; //
let maxTimer = 6;
let level = 0;
let num = 0;
let ints = [];
let int1;
let int2;
let ant;
let number;
let play;
let back;
let rain;
let end;
let song1, song2, song3;

function preload() {
  song1 = loadSound("Assets/Adventure.mp3");
  song2 = loadSound("Assets/Evolution.mp3");
  song3 = loadSound("Assets/Psych.mp3");
}

function setup() {

  ant = loadFont("Assets/Anton.ttf");
  number = loadImage("Assets/Numbers.png");
  play = loadImage("Assets/Char2.png");
  back = loadImage("Assets/Background.png");
  rain = loadImage("Assets/Rainbow.png");
  end = loadImage("Assets/GameOver.png")

  createCanvas(400, 600); // Makes canvas responsive

  // Spawn objects
  for(let i = 0; i<2; i++){
    int1 = int(random(10));
    int2 = int(random(10));
    numbers.push(new Equation(int1, int2));
    ints[i] = int(int1+int2);
  }

  robPos = createVector(width/2, height/2);
  textAlign(CENTER,CENTER);
  textFont(ant);
}

function draw() {

  switch(state) {

    case 0:
      song1.play();
      state = 1;
    break;

    case 1: //Welcome Screen
      background(147, 184, 186);
      for(let i = 0; i<width/100; i++){
        for(let j = 0; j<height/100; j++){
          image(number, 100*i, 100*j);
        }
      }
      fill('white');
      push();
      rectMode(CENTER);
      textSize(48);
      text("Welcome to Solve the Equation!", width/2, height/2, width/2, height/2);
      pop();
    break;

    case 2:
      song2.play();
      state = 3;
    break;

    case 3: //Game
      game();
    break;

    case 4:
      song2.pause();
      state = 5;
    break;

    case 5:
      song3.play();
      state = 6;
    break;

    case 6: //Win
      background(102, 179, 196);
      push();
      imageMode(CENTER);
      image(rain, width/2, height/2, width, height)
      pop();
      push();
      fill('white');
      textSize(24);
      text("Yep, that's the right answer! Keep going!", width/2, height/2+100);
      pop();
    break;

    case 7:
      song2.pause();
      state = 8;
    break;

    case 8:
      song3.play();
      state = 9;
    break;

    case 9: //Lose
      background(19, 21, 71);
      push();
      imageMode(CENTER);
      image(end, width/2, height/2, 200, 200);
      pop();
      push();
      fill('gray');
      textSize(64);
      text("Game Over", width/2, height/2+100);
      pop();
    break;
  }
}

function game() {
  background("gray");
  for(let i = 0; i<width/100; i++){
        for(let j = 0; j<height/100; j++){
          image(back, 100*i, 100*j);
        }
      }
  //iterating through numbers array
  for(let i = 0; i<numbers.length; i++){
    numbers[i].display();
    numbers[i].move();
    for(let j = 0; j<ints.length; j++){
      num = ints[j];
    }
    //checking for collisions, check distance between robot and numbers
    if(numbers[i].pos.dist(robPos) < 50&&num==ints[i]){
      state = 4;
    }
    if(numbers[i].pos.dist(robPos) < 50&&num!=ints[i]){
      state = 7;
    }
  }
  fill("white");
  //robot
  push();
  imageMode(CENTER);
  image(play,robPos.x, robPos.y, 100, 100);
  pop();
  push();
  fill('white');
  text(num, robPos.x, robPos.y+5);
  pop();
  checkForKeys();
}




class Equation {

  // constructor and attributes
  constructor(int1, int2) {
    this.pos = createVector(random(width),random(height)) ;  // initialize your attributes here
    this.v = createVector(random(-3,3), random(-3,3));
    this.o = random(100);
    this.s = random(16, 48);
    this.int1 = int1;
    this.int2 = int2;
  }

  // methods

  display() {
    text(this.int1.toFixed(0)+" + "+this.int2.toFixed(0), this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if(this.pos.x>width) this.pos.x = 0;
    if(this.pos.x<0) this.pos.x = width;
    if(this.pos.y>height) this.pos.y = 0;
    if(this.pos.y<0) this.pos.y = height;


  }

}
//checking for the keys(arrows)
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    robPos.x+=-5;
    if (robPos.x < 0) robPos.x = 0;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    robPos.x+=5;
    if (robPos.x > width) robPos.x = width;
  }
  if (keyIsDown(UP_ARROW)) {
    robPos.y+=-5;
    if (robPos.y < 0) robPos.y = 0;
  }
  if (keyIsDown(DOWN_ARROW)) {
    robPos.y+=5;
    if (robPos.y > height) robPos.y = height;
  }
}

function mouseReleased() {

  switch(state) {
    case 1:
      song1.pause();
      state = 2;
    break;

    case 6: //Win state
      level++
      resetTheGame();
      song3.pause();
      state = 0;//go to menu screen
    break;

    case 9: //Lose state
      level = 0;
      resetTheGame();
      song3.pause();
      state = 0;//go to menu screen
    break;
  }
}

function resetTheGame() {
  timer = 0;
  numbers = [];
  ints = [];

  //Spawn objects
  for(let i = 0; i< 2+level; i++){
    int1 = int(random(10));
    int2 = int(random(10));
    numbers.push(new Equation(int1, int2));
    ints[i] = int(int1+int2);
  }

  robPos = createVector(width/2, height/2);
}

function touchStarted() {
  getAudioContext().resume();
}
