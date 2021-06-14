var tower,towerImg;
var door, doorImg,doorsGroup;
var climber, climberImg, climbersGroup;
var ghost, ghostImg;
var invisibleBlock,invisibleBlockGroup;
var gameState="play";


function preload(){
 towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  doorsGroup=new Group ();
   climbersGroup=new Group ();
invisibleBlockGroup=new Group ();
}

function setup() {
createCanvas(600,600);
tower=createSprite (300,300);
tower.addImage("tower",towerImg)
tower.velocityY= 2;
  
ghost=createSprite (200,200);
ghost.addImage("ghost",ghostImg)  
  ghost.scale=0.4;

  

  
}

function draw(){
background ("white");
if(gameState=="play"){
if (tower.y>400) {
 tower.y=300 
  
}
if (keyDown("left")){
  ghost.x= ghost.x -3; 
  
}  
 if (keyDown("right")){
  ghost.x= ghost.x +3; 
  
} 
if (keyDown("space")){
  ghost.velocityY=-5;
} 
ghost.velocityY=ghost.velocityY +0.8; 
  
 if(ghost.isTouching(climbersGroup)){
    ghost.velocityY =0
    } 
  if(ghost.isTouching(invisibleBlockGroup)|| ghost.y > 600 ){
    ghost.destroy();
    gameState="end";
    }      
  
 spawnDoors()  
drawSprites();  
}
if (gameState=="end"){ 
  fill("yellow");
 textSize(30); 
text ("GAME OVER",230,250);
}
}
function spawnDoors(){
  if (frameCount%140===0){
    
    
door=createSprite (200,50);
door.addImage("doors",doorImg)
door.velocityY= 2; 
door.x= Math.round(random(120,400))
door.lifetime= 800; 
    
doorsGroup.add (door);    
    
climber=createSprite (200,100);
climber.addImage("climber",climberImg) 
climber.velocityY= 2;    
climber.x=door.x
climber.lifetime=800;
    
climbersGroup.add(climber);
    
 invisibleBlock=createSprite (190 ,100);
    invisibleBlock.width=climber.width
    invisibleBlock.height=4;
invisibleBlock.velocityY=2;
    invisibleBlock.x=door.x;
    
    invisibleBlockGroup.add(invisibleBlock);
    
   
    
    ghost.depth=door.depth
    ghost.depth +=1;
                                  
               
  }

}