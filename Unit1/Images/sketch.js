let octo ;
let vey ;
let web ;

function setup() {
  createCanvas(500, 500);

  octo = loadImage("Assets/Octopus.jpg");
  vey = loadImage("Assets/Vey3.jpg");
  web = loadImage("Assets/web.jpg");
}

function draw() {

  image(octo, 225, 0, 150, 150);
  image(vey, 225, 150, 150, 200);
  image(web, 225, 350, 150, 150);
}
