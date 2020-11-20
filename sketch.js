
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleground;

var gamestate;
var play=1;
var end=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 }



function setup() {
 createCanvas(800,500) 
 monkey=createSprite(50,400,100,100); 
 monkey.addAnimation("mon",monkey_running);
  monkey.scale=0.2;
  
  gamestate=play;
  
  score=0;
  
  invisibleground=createSprite(400,470,900,20);
  invisibleground.velocityX=-5;
  
  FoodGroup=new Group();
   obstacleGroup=new Group();
}
      

function draw() {
 background(400)
   text("score : "+score,400,20);
  monkey.velocityY=4;
  if(gamestate===play){
     if(monkey.isTouching(obstacleGroup)){
    
    gamestate=end;
    
  }
  if(keyDown("space")) {
        monkey.velocityY = -12;
  }
    banana1();
  obstacle1();
  }
  
  if (gamestate===end){
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    score=0;
    invisibleground.velocityX=0;
    
  }
   if(frameCount%400===0){
     FoodGroup.setVelocityXEach(-4);
     obstacleGroup.setVelocityXEach(-4);
     invisibleground.VelocityX=-4; 
   }
  monkey.collide(invisibleground);
  
  invisibleground.x=invisibleground.width/2;
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    
    score=score+1;
  }
  
  drawSprites();
  
}
 function banana1(){
 if(frameCount%300===0){
  banana=createSprite(1000,200,10,10);
  banana.addImage("ban",bananaImage);
  banana.scale=0.2;
  banana.velocityX=invisibleground.velocityX;
  banana.lifetime=800;
  FoodGroup.add(banana); 
 }
 }

function obstacle1(){
if(frameCount%500===0){
  obstacle=createSprite(1000,450,10,10);
  obstacleGroup.add(obstacle);           
  obstacle.velocityX=-5;
  obstacle.addImage("rock",obstaceImage);
  obstacle.scale=0.2;
}

}




