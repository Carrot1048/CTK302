let song1 ;

function preload(){
  song1 = loadSound("Assets/Dub.mp3");
}

function setup() {
  createCanvas(500, 500);

  song1.loop();
}

function mouseReleased() {

  if (song1.isPlaying()) {
    song1.pause();
  }
  else{
    song1.loop();
  }
}

function draw() {
  background(81, 158, 156);
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
