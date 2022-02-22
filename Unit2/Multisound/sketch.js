let song1, song2, song3 ;
let state = 0;

function preload() {
  song1 = loadSound("Assets/Adventure.mp3");
  song2 = loadSound("Assets/Evolution.mp3");
  song3 = loadSound("Assets/Psych.mp3");
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {

  switch(state) {

    case 0:
    song1.play();
    state = 1;
    break;

    case 1:
    background("red");
    text("Listening to Adventure Music", width/2, height/2);
    break;

    case 2:
    song2.play();
    state = 3;
    break;

    case 3:
    background("yellow");
    text("Listening to Evolution music", width/2, height/2);
    break;

    case 4:
    song3.play();
    state = 5;
    break;

    case 5:
    background("green");
    text("Listening to Psychedelic music", width/2, height/2);
    break;
  }
}

function mouseReleased() {
  state = (state + 1) % 6 ;
  song1.pause();
  song2.pause();
  song3.pause();
}
