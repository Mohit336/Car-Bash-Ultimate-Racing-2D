class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
    car1 = createSprite(100,200);
    car1.addImage(car1RandomImg);
    car1.scale = 0.5;
    car2 = createSprite(300,200);
    car2.addImage(car2Img);
    car2.scale = 1.5;
    car3 = createSprite(500,200);
    car3.addImage(car3Img);
    car3.scale = 1.5;
    car4 = createSprite(700,200);
    car4.addImage(car4Img);
    car4.scale = 1.5;
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){

      //this.button1.position(displayWidth/2 + -100, displayHeight/2.8);

      //var display_position = 100;
      image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5)
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill('red');
          ellipse(x, y, 60, 60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if (keyIsDown(DOWN_ARROW) && player.index !== null) {
      player.distance -=10
      player.update();
    }
   //if (player.distance > height * 5 - 100) { gameState = 2; player.rank += 1; Player.updateCarsAtEnd(player.rank); swal({ title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`, text: "You reached the finish line successfully", imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png", imageSize: "100x100", confirmButtonText: "Ok", }); }

   //if (player.distance > height * 5 - 100) {gameState = 2;player.rank += 1;player.updateCarsAtEnd(player.rank);cupImg.addImage(cupImg);}

    

    drawSprites();
    
  }
  end(){
   console.log("game Ended");
   console.log(player.rank);
   


  }
  
}
