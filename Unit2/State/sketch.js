let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background(127, 186, 142);
      for(var j = 0; j<100; j++){
        for(var i = 0; i<100; i++){
          fill(random(255), random(255), random(255), random(100));
          rect(i*10, j*10, 10, 10);
        }
      }
      text("0", 100, 100);
      break;

    case 1:
      background(186, 127, 127);
      for(var j = 0; j<100; j+=2){
        for(var i = 0; i<100; i++){
          fill(random(255), 0, 0);
          ellipse(i*10, j*10, 20, 20);
        }
      }
      text("1", 100, 100);
      break;

    case 2:
      background(127, 129, 186);
      for(var j = 0; j<100; j+=3){
        for(var i = 0; i<100; i++){
          fill(0, random(255), 0);
          triangle(i*10, j*10, i*15, j*5, i*20, j*10);
        }
      }
      text("2", 100, 100);
      break;

    case 3:
      background(184, 127, 186);
      for(var j = 0; j<100; j++){
        for(var i = 0; i<100; i++){
          fill(0, 0, random(255));
          rect(i*10, j*10, 30, 15);
        }
      }
      text("3", 100, 100);
      break;

    case 4:
      text("4", 100, 100);

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
