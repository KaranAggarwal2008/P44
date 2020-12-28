var canvas;
var playerCount;
var gameState=0;
var PaddleBasedWall,PaddleBasedWallButton1,PaddleBasedWallButton2;
var backgroundIMG;
var WaterCircleDoor,FireCircleDoor;
var greenGoose;
var waterCircle,FireCircle;
function preload(){
backgroundIMG = loadImage("background.jpg");
}
function setup(){
    canvas = createCanvas(1200,800);
    background(backgroundIMG);
    fill("brown")
  rect(0,770,1200,30)
  rect(1200,570,-1000,30)
  rect(0,370,1000,30)
  rect(1200,170,-1000,30)
  waterCircle=createSprite(1100,750,20,20);
  FireCircle=createSprite(1140,750,20,20);
  waterCircle.shapeColor="blue";
  FireCircle.shapeColor="red";
  drawObstacles(1000,770,100,10,"red")
  drawObstacles(500,770,100,10,"blue")
  drawObstacles(200,770,20,10,"orange");
  drawObstacles(50,770,100,10,"orange")
}
function draw(){
drawSprites()
}
function drawObstacles(x,y,width,height,shapeColor){
this.obstacle=createSprite(x,y,width,height);
this.obstacle.shapeColor=shapeColor;
}