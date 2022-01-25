let font1 ;
let font2 ;

function setup() {
  createCanvas(500, 500);

  font1 = loadFont("Assets/Courgette.ttf");
  font2 = loadFont("Assets/Rubik.ttf");

  textAlign(CENTER);
}

function draw() {
  background(0);

  textSize(48);
  fill(94, 71, 186);
  textFont(font1);
  text("Hola,", width/2, 100);
  textFont(font2);
  text("Me llamo Othniel.", width/2, 200);
}
