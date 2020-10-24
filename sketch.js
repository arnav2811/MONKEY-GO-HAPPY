//creating global variables
var monkey, monkeyImg;
var banana, bananaImg, bananaGroup;
var obstacles, obstaclesImg, obstaclesGroup;
var back,backImg;
var ground;
var score = 0;
var time = 0;

function preload(){
monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png", 
"Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png",  "Monkey_10.png");
backImg = loadImage("jungle.jpg");
bananaImg = loadImage("banana.png")
obstaclesImg = loadImage("stone.png");
}
function setup(){
  createCanvas(700, 600);
  back = createSprite(0, 0, 700, 600);
  back.addImage(backImg);
  back.velocityX = -10
  back.scale= 1.5;
  ground = createSprite(300, 570, 600, 5);
  ground.velocityX = -10;
  ground.visible = false;
  monkey = createSprite(60, 500);
  monkey.addAnimation("running",monkeyImg);
  monkey.scale = 0.2;
  obstaclesGroup= createGroup();
  bananaGroup= createGroup();
  obstacles = createSprite(600, 520);
  obstacles.addImage(obstaclesImg);
  obstacles.scale = 0.3;
  obstacles.velocityX = -10;
}
function draw(){
  background("white");
  time = time + (Math.round(frameRate())/100)
  if(back.x<0){
    back.x = back.width/2;
  }
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if (touches.length>0||keyDown("space")&& monkey.y >=300) {
    monkey.velocityY = -10;
    touches = [];
  }
  monkey.velocityY +=0.8
  monkey.collide(ground);
  myBanana();
  barrier();
  if (bananaGroup.isTouching(monkey)) {                    
    bananaGroup.destroyEach();
    score += 2;
    switch(score){
      case 10: monkey.scale+= 0.02
      break;
      case 20: monkey.scale+=0.02;
      break;
      case 30: monkey.scale+=0.02;
      break;
      case 40: monkey.scale+=0.02;
      break;
      case 50: monkey.scale+=0.02;
      break;
      case 60: monkey,scale+=0.02;
      break;
      case 70: monkey,scale+=0.02;
      break;
      case 80: monkey,scale+=0.02;
      break;
      case 90: monkey,scale+=0.02;
      break;
      case 100: monkey,scale+=0.02;
      break;
      default: break;
    }
  }
   if(obstaclesGroup.isTouching(monkey)){
    obstaclesGroup.destroyEach();
    monkey.scale = 0.2;

  }
  drawSprites();
  textSize(20);
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE : "+ score, 560, 20);
  text("TIME : "+time, 560, 50);
}
function myBanana(){
  if(frameCount%140===0){
    banana = createSprite(700,Math.round(random(200, 400)))
    banana.addImage(bananaImg);
    banana.velocityX = -18;
    banana.scale= 0.1;
    banana.lifetime = 250;
    bananaGroup.add(banana);
  }
}
function barrier() {
  if(frameCount%300===0){
    obstacles = createSprite(700, 530);
    obstacles.addImage(obstaclesImg);
    obstacles.scale = 0.3;
    obstacles.velocityX = -10;
    obstacles.lifetime = 300;
    obstaclesGroup.add(obstacles);
  }
}
