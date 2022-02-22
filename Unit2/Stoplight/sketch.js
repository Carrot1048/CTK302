let state = 0;
let timer = 0;
let x = 20;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background("white");
  fill("black");
  rect(width/2, height/2, 200, 600);

  switch(state) {

    case 0: //red light
    fill("red");
    ellipse(width/2, height/2 - 175, 150, 150);
    fill("gray");
    ellipse(width/2, height/2, 150, 150);
    ellipse(width/2, height/2 + 175, 150, 150);

    fill("blue");
    rect(x, 780, 40, 20);
    x+=0;

    timer++;
    if(timer > 3*60) {
      timer = 0;
      state = 1;
    }

    break;

    case 1: //green light
    fill("gray");
    ellipse(width/2, height/2 - 175, 150, 150);
    ellipse(width/2, height/2, 150, 150);
    fill("green");
    ellipse(width/2, height/2 + 175, 150, 150);

    fill("blue");
    rect(x, 780, 40, 20);
    x+=5;
    if(x > width){
      x = 20;
    }

    timer++;
    if(timer > 3*60) {
      timer = 0;
      state = 2;
    }

    break;

    case 2: //yellow light
    fill("gray");
    ellipse(width/2, height/2 - 175, 150, 150);
    fill("yellow");
    ellipse(width/2, height/2, 150, 150);
    fill("gray");
    ellipse(width/2, height/2 + 175, 150, 150);

    fill("blue");
    rect(x, 780, 40, 20);
    x+=3;
    if(x > width){
      x = 20;
    }

    timer++;
    if(timer > 2*60) {
      timer = 0;
      state = 0;
    }

    break;


  }

}
