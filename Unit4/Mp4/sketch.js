let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
var font1, font2;

var locationData;
// Lets put all our map options in a single object
const options = {
  lat: 33,
  lng: 130,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  locationData = getCurrentPosition();
  font1 = loadFont("Assets/Anton.ttf");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(displayWidth, displayHeight);
  textFont(font1, 24);
  intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
  // Create a tile map with the options declared
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


}

function draw() {

}

function positionPing(position) {
  // textSize(36);
  background("#2452d1");
  fill("white");
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
}
