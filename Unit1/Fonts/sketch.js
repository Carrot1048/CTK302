let font1 ;
let font2 ;

function setup() {
  createCanvas(500, 500);

  font1 = loadFont("Assets/Courgette.ttf");
  font2 = loadFont("Assets/Rubik.ttf");

  textAlign(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  textSize(48);
  fill(94, 71, 186);
  translate(width/2, 100);
  textFont(font1);
  rotate(-30);
  text("Hola,", 0, 0);
  textFont(font2);
  text("Me llamo Othniel.", 0, 100);
}
