function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {

  if(mouseIsPressed){
    background(61, 133, 121);
    fill(0);
  }else{
    background(0);
    fill(61, 133, 121);
  }

  rect(width/2,height/2,200,100);
}
