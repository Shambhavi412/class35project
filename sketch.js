var balloon,balloonImage1,balloonImage2;
var balloonRefer;
var position;
// create database and position variable here
 
function preload(){
   bg =loadImage("images/bg9.gif");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1300,650);

 
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  balloonRefer = database.ref("balloon/position");
  balloonRefer.on("value",readPosition,showError);


  balloon.scale = 0.414;

  textSize(20); 
}

// function to display UI
function draw() {
  //push();
  background(bg);
  //tint(60,60)

  //pop();
  
  console.log(balloon.scale)

  if(position!== undefined)
  {
    if(keyDown(LEFT_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in left direction
      update(-3,0);
      }
    else if(keyDown(RIGHT_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in right direction
      update(3,0);
     
    }
    else if(keyDown(UP_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in up direction
      update(0,-4);
      balloon.scale = balloon.scale - 0.002;
    
    }
    else if(keyDown(DOWN_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in down direction
      update(0,4);
      balloon.scale = balloon.scale + 0.002;
    
      
   
  }
  }
  drawSprites();
  
  fill(0);
    stroke("white");
    textSize(25);
    stroke("cyan");
    strokeWeight(3);
    fill("black");
    textFont("jokerman")
    text("**Use arrow keys to move Hot Air Balloon!",40,40);
    
   
    
}
function readPosition(data)
{
    position = data.val();
   // balloon.x = balloon.x+40;

    balloon.x = position.x;
    balloon.y = position.y;

}

function update(x,y)
{
  database.ref("balloon/position").set({
    'x': position.x + x,
    'y': position.y + y
  });
  
}

  function showError()
  {
    console.log("There is an error :):)");
  }
  


  
