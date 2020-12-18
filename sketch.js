var backImage,backgr;
var player,player_runnning;
var ground,groundImage;
var foodGroup,bananaImage,obstacleImage;
var GameOver;
var score = 0;

function preload (){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage ("stone.png");
  }
function setup (){
  createCanvas(800,400);
  backgr = createSprite (0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale = 1.4;
  backgr.x = backgr.width/2;
  backgr.velocityX = -5;
  
  player = createSprite (100,340,20,50);
  player.addAnimation ("running",player_running);
  player.scale = 0.2;
  
  ground = createSprite (400,350,800,10);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  ground.visible = false;
  
  foodGroup = new Group ();
  obstacleGroup = new Group ();
  
  score = 0;
  
}

function draw () {
  background(255);
  
  if (ground.x<0){
      ground.x = ground.width/2;
  }
  
  if (backgr.x<0){
      backgr.x = backgr.width/2;
  }
  
  if (foodGroup.isTouching(player)){
      foodGroup.destroyEach();
    score = score+2;
  }
  
  if (keyDown("space")){
      player.velocityY = -14;
  }
  player.velocityY = player.velocityY + 0.7;
  
  player.collide (ground);
  spawnFood ();
  spawnObstacles ();
  
  if (obstacleGroup.isTouching(player)){
      player.scale = player.scale = 0.02;
    score = score - 2;
  }
  
  drawSprites();
  
  stroke ("black");
  textSize (25);
  fill("black");
  text ("Score :" + score , 475,50);
  
}
function spawnFood (){
  if (frameCount % 80 === 0){
      var banana = createSprite (600,240,50,15);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -7;
    banana.lifetime = 350;
    foodGroup.add(banana);
  }
  }
  function spawnObstacles (){
  if (frameCount % 300 === 0){
      var obstacle = createSprite (800,340,10,50);
    obstacle.y = random(120,200);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    obstacle.lifetime = 350;
    obstacleGroup.add(obstacle);
  }
}






















