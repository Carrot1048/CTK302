let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(28);
  textFont("Georgia");
}

function draw() {
  background(54, 98, 156);

  switch(state){
    case 0:
    fill("white");
    text("What did the water say to the land?", width/2, height/2);
    break;

    case 1:
    background(189, 163, 104);
    fill(54, 98, 156);
    push();
    textSize(36);
    text("Sea you later!", width/2, height/2);
    pop();
    break;
  }

  push();
  fill(164, 224, 224);
  rect(100, 100, 100, 100);
  pop();
}

function mouseReleased() {

  if ((mouseX > 50) && (mouseX < 150) && (mouseY > 50) && (mouseY < 150)){
    state = (state + 1) % 2
  }
}
