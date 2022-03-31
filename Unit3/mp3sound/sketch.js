let cars = []; //initializing an array
let frogPos ; //having the x and y variables
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
    cars.push(new Car(int1, int2));
    ints[i] = int(int1+int2);
  }

  frogPos = createVector(width/2, height/2);
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
      state = 5;
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
      state = 7;
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
  //iterating through cars array
  for(let i = 0; i<cars.length; i++){
    cars[i].display();
    cars[i].move();
    for(let j = 0; j<ints.length; j++){
      num = ints[j];
    }
    //checking for collisions, check distance between this car and frog
    if(cars[i].pos.dist(frogPos) < 50&&num==ints[i]){
      state = 6;
    }
    if(cars[i].pos.dist(frogPos) < 50&&num!=ints[i]){
      state = 9;
    }
  }
  fill("white");
  //frog
  push();
  imageMode(CENTER);
  tint("white");
  image(play,frogPos.x, frogPos.y, 100, 100);
  pop();
  push();
  fill('white');
  text(num, frogPos.x, frogPos.y+5);
  pop();
  checkForKeys();
}




class Car {

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
    // fill(this.r, this.g, this.b, this.o);
    // rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x, this.pos.y+40, 30, 30);
    // ellipse(this.pos.x+70, this.pos.y+40, 30, 30);
    // textSize(this.s);
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
    frogPos.x+=-5;
    if (frogPos.x < 0) frogPos.x = 0;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    frogPos.x+=5;
    if (frogPos.x > width) frogPos.x = width;
  }
  if (keyIsDown(UP_ARROW)) {
    frogPos.y+=-5;
    if (frogPos.y < 0) frogPos.y = 0;
  }
  if (keyIsDown(DOWN_ARROW)) {
    frogPos.y+=5;
    if (frogPos.y > height) frogPos.y = height;
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
  cars = [];
  ints = [];

  //Spawn objects
  for(let i = 0; i< 2+level; i++){
    int1 = int(random(10));
    int2 = int(random(10));
    cars.push(new Car(int1, int2));
    ints[i] = int(int1+int2);
  }
}

function touchStarted() {
  getAudioContext().resume();
}
