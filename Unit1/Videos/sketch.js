let winter ;
let playing = false ;

function setup() {
  createCanvas(500,500);
  imageMode(CENTER);
  textAlign(CENTER);
  // winter = createVideo("Assets/Winter.MOV", vidLoad);
  // winter.size(500, 500);
  // winter.hide();
}

function draw() {
  // image(winter, width/2, height/2, 500, 500);
  text("Hello Winter", width/2, height/2);
}

// function mouseReleased() {
//   if (!playing) {
//     winter.play();
//     playing = true;
//   }
//   else {
//     winter.pause();
//     playing = false;
//   }
// }
//
// function vidLoad(){
//   winter.loop();
//   winter.volume(0);
// }
