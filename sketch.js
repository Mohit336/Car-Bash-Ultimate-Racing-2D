var canvas, backgroundImage;



var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var leaderShip;

var cars, car1, car2, car3, car4,
    car5Img, car6Img, car7Img,
    car8Img, car9Img, car10Img,
    car11Img, car12Img, car13Img, 
    car14Img, car15Img, car16Img,
    car17Img, car18Img;

var backgroundImage;
var trackImg; 
var cupImg;   
var car1RandomImg;

function preload() {
  backgroundImage = loadImage("images/BackGroundImg.jpg");
  cupImg = loadImage("images/Winner Cup.png"); 
  trackImg = loadImage("images/track.jpg");
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  car5Img = loadImage("images/car5.png");
  car6Img = loadImage("images/car6.PNG");
  car7Img = loadImage("images/car7.PNG");
  car8Img = loadImage("images/car8.png");
  car9Img = loadImage("images/car9.png");
  car10Img = loadImage("images/car10.PNG");
  car11Img = loadImage("images/car11.PNG");
  car12Img = loadImage("images/car12.png");
  car13Img = loadImage("images/car13.PNG");
  car14Img = loadImage("images/car14.png");  
  car15Img = loadImage("images/car15.PNG");
  car16Img = loadImage("images/car16.png");
  car17Img = loadImage("images/car14.png");
  car14Img = loadImage("images/car14.png");
  car18Img = loadImage("images/car18.png");

getBackgroundImg();





}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState == 2) {
    game.end();
  }
}


function getBackgroundImg(){
  var rand = Math.round(random(5,10))
   console.log(rand);
    var car1Random = "images/car" + rand+".png"
    console.log(car1Random);
car1RandomImg = loadImage(car1Random);
  
} 



