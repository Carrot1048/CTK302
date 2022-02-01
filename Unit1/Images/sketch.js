let octo ;
let vey ;
let web ;

function setup() {
  createCanvas(500, 500);

  imageMode(CENTER);

  octo = loadImage("Assets/Octopus.jpg");
  vey = loadImage("Assets/Vey3.jpg");
  web = loadImage("Assets/web.jpg");
}

function draw() {
  background(0);

  image(octo, width/2, 75, 150, 150);
  image(vey, width/2, 250, 150, 200);
  image(web, width/2, 425, 150, 150);
}
