var bubbles = [];
let url = "";
let season1, season2, season3, season4;

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  let key = "1-rGK55C9Sh76RZhnRfTIP0keKb1DUevuxW-Bi5LsW5E";

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  season1 = loadImage("Assets/Fall.png");
  season2 = loadImage("Assets/Winter.png");
  season3 = loadImage("Assets/Spring.png");
  season4 = loadImage("Assets/Summer.png");
  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["How many siblings do you have?"],
        data[i]["What's your favorite color?"],
        data[i]["What's your favorite animal?"],
        data[i]["What is your favorite season?"],
        data[i]["What is your name?"])); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  background(99, 88, 88);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(siblings, color, animal, season, name) {
    // only the order of these parameters matters!
    this.siblings = siblings;
    this.color = color;
    this.animal = animal;
    this.season = season;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), random(-1, 1));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  display() {
    // stroke("white");
    //Filling the shapes based on the person's favorite color
    fill('black');
    if(this.color=="red"||this.color=="Red"){
      fill('red');
    }
    if(this.color=="blue"||this.color=="Blue"){
      fill('blue');
    }
    if(this.color=="yellow"||this.color=="Yellow"){
      fill(158, 154, 43);
    }
    if(this.color=="purple"||this.color=="Purple"){
      fill(67, 18, 120);
    }
    if(this.color=="green"||this.color=="Green"){
      fill(35, 120, 40);
    }
    //If siblings is even, then shape is square, if odd, then shape is circle
    if(this.siblings%2==0){
      rect(this.pos.x, this.pos.y+20, 120, 120);
    }else{
      ellipse(this.pos.x, this.pos.y+10, 120, 120);
    }
    //Image based on favorite season
    if(this.season=="Fall"){
      image(season1, this.pos.x, this.pos.y);
    }
    if(this.season=="Winter"){
      image(season2, this.pos.x, this.pos.y);
    }
    if(this.season=="Spring"){
      image(season3, this.pos.x, this.pos.y);
    }
    if(this.season=="Summer"){
      image(season4, this.pos.x, this.pos.y);
    }
    push();
    stroke("black");
    fill(this.r, this.g, this.b);
    text(
      this.siblings + "\n" + this.color + "\n" + this.animal + "\n" + this.season + "\n" + this.name,
      this.pos.x,
      this.pos.y
    );
    pop();

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }


}
