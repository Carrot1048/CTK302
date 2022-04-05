//Note - Use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let description = '';
let pixel;
let tempy;
let r = 0;
let g = 0;
let b = 255;
let land;

function setup() {
  createCanvas(400, 400);

  //Loading the images
  tempy = loadImage("Assets/Tempy.png");
  land = loadImage("Assets/Juneau.jpg");

  //Loading font into the whole program
  pixel = loadFont("Assets/Pixel.ttf");
  textFont(pixel);
  textSize(20);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?zip=99801&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US


 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=2ab3fd961cc8c4aacb1786ddb79e8da5" ;

  let myTotalString = myCityString + myIDString;


  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.weather[0].description;
}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      push();
      noTint();
      image(land, 0, 0, width, height);
      pop();
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Windspeed is " + windspeed, 20, 40);
      text("Temperature is " + temperature, 20, 60);
      text("Humidity is " + humidity, 20, 80);
      text("Weather description is " + description, 20, 100);

      //reset rgb
      r = 0;
      b = 255;
      //thermometer
      for(let i = 0; i<temperature; i++){
        r+=2.5;
        b+=-2.5;
      }
      fill(r, g, b);
      y = map(temperature, -10, 100, 5, height-20);
      rect(width-30, height-10, 10, -y);

      //reset rgb
      r = 0;
      b = 255;
      // Tempy
      for(let i = 0; i<temperature; i++){
        r+=2.5;
        b-=2.5;
      }
      tint(r, g, b);
      image(tempy, x, 300, 100, 100);

      // move Tempy's x position
      x += temperature / 10;

      if (x > width) x = 0;//loop the cloud across screen

      break;
  }
}
