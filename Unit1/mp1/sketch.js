function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {

  if(mouseIsPressed){
    background(61, 133, 121);
    fill(0);
  }else{
    background(0);
    fill(82, 49, 20);
    rect(width/2, 400, 80, 160);
    push();
    fill(58, 31, 77);
    rect(width/2, 370, 80, 100);
    pop();
    push();
    translate(460, 400);
    rotate(15);
    rect(0, 0, 40, 160);
    pop();
    push();
    translate(540, 400);
    rotate(-15);
    rect(0, 0, 40, 160);
    pop();
  }
}
