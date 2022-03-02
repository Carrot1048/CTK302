let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      fill(155);
      textSize(45);
      text("0", width / 2, height / 2);

      //timer code
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background(14, 230, 212);
      fill(255);
      textSize(30);
      text("1", width / 2, height / 2);

      //timer code
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 2;
      }

      break;

    case 2:
      background(250, 187, 228);
      fill(0);
      textSize(60);
      text("2", width / 2, height / 2);

      //timer code
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 0;
      }

      break;

  }
}
