let cars = [];
let oct;
let fun;

function setup() {
  createCanvas(500, 500);
  noStroke();
  oct = loadImage("Assets/Octopus.png");
  fun = loadImage("Assets/PartBack.png");
}

function draw() {
  background('grey');
  for(let i = 0; i<width/100; i++){
    for(let j = 0; j<height/100; j++){
      image(fun, 100*i, 100*j);
    }
  }

  cars.push(new Car());
  for(let i = 0; i<cars.length; i++){
    cars[i].display();
    cars[i].move();
    if(cars[i].a <=0 ) {
      cars.splice(i, 1);
    }
  }
}

class Car {

  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(4, 8), random(1, 10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(32, 48);
  }

  display() {
    push();
    tint(this.r, this.g, this.b, this.a);
    image(oct, this.pos.x, this.pos.y, this.s, this.s);
    pop();
  }

  move() {
    this.pos.add(this.vel);
    this.a-=5;
  }
}
