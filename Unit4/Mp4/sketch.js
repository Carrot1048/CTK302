let flower;
let state = 0;
let name;
let myColor;
var locationData;
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

// Lets put all our map options in a single object
const options = {
  lat: 33,
  lng: 130,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
  locationData = getCurrentPosition();
  font1 = loadFont("Assets/Anton.ttf");
}

function setup(){
  canvas = createCanvas(800,400);
  intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
  // background(100); let's uncomment this, we don't need it for now
  textFont(font1, 24);
  flower = loadImage("Assets/Spring.png");
  // Create a tile map with the options declared
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw(){
    switch(state){
      case 0:
        background(111, 144, 148);
        name = prompt("What is your name?");
        myColor = prompt("What is your favorite color?");
        state++;
        break;

      case 1:
        clear();
        const itoshima = myMap.latLngToPixel(locationData.latitude, locationData.longitude);
        //color of the flower using their favorite color
        tint(myColor);
        image(flower, itoshima.x, itoshima.y, 15, 15);
        break;
    }
}

function positionPing(position) {
  // textSize(36);
  background("#2452d1");
  fill("white");
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
}
