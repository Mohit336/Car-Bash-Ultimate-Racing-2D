class Form {

  constructor() {
    this.input = createInput("YourName");
    this.button = createButton('Play');
    this.button1 = createButton("Leaderboard")
    this.greeting = createElement('h2');
    this.title = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Bash Ultimate Racing 2D");
    this.title.position(displayWidth/2 - 280, 0);
    
    this.button.style.width = "100px"
    this.input.position(displayWidth/2+-130 , displayHeight/1.8);
    this.input.class("customButton");
    this.button.position(displayWidth/2 + -100, displayHeight/2.8);
    this.button.class("customButton");
    this.button1.position(displayWidth-865 , 400);
    this.button1.class("customButton");
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Let's Go " + player.name);
      this.greeting.position(displayWidth/10 - 90, displayHeight/4);
    });
   this.button1.mousePressed(()=>{
  if (player.rank>0) {
    alert("You are doing great! You are in the position"+ player.rank)

  } else {
    alert("Complete the Game to know your rank");
  }
   
   })
  }
}
