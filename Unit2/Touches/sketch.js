let numberOfTouches ;
let shoes;
let door;
let sticks;
let straight;
let hen;

function preload(){
  shoes = loadImage("Assets/Shoes.jpg");
  door = loadImage("Assets/Door.jpg");
  sticks = loadImage("Assets/Sticks.jpg");
  straight = loadImage("Assets/Straight.jpg");
  hen = loadImage("Assets/Hen.jpg");
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(28);
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;

  switch(numberOfTouches) {
    case 0:
      text("Hello there?! Touch the screen!", width/2, height/2, 200, 200) ;
      break ;

      case 1:
       image(shoes, width/2, height/2, 250, 250);
       text("One, Two, buckle my shoe. ", width/2, height/2, 200, 200) ;
      // put a picture here
      break ;

      case 2:
      image(door, width/2, height/2, 250, 250);
      text("Three, Four, shut the door.", width/2, height/2, 200, 200) ;
            // put a picture here
      break ;

      case 3:
      image(sticks, width/2, height/2, 250, 250);
     text("Five, Six, pick up sticks.", width/2, height/2, 200, 200) ;
            // put a picture here
      break ;

      case 4:
      image(straight, width/2, height/2, 250, 250);
      text("Seven, Eight, lay them straight.", width/2, height/2, 200, 200);
      break ;

      case 5:
      image(hen, width/2, height/2, 250, 250);
      text("Nine, Ten, a big red hen.", width/2, height/2, 200, 200);
      break ;
  }

}
