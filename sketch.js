var runner,runner_moving;
var path,pathImg;
function preload(){
  //pre-load images
  runner_moving =loadImage("Runner-2.png","Runner-1.png");
  pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite(50,40,100,200);
  runner.addAnimation("moving",runner_moving);
  runner.scale=0.5;

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;



}

function draw() {
  background(0);
  

}
