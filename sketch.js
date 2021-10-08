var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  fixedRect.velocityY = +0;
  
  gameObject1 = createSprite(100, 100, 50, 50); 
  gameObject1.shapeColor = "green"; 
  gameObject2 = createSprite(200, 100, 50, 50); 
  gameObject2.shapeColor = "green"; 
  gameObject3 = createSprite(300, 100, 50, 50); 
  gameObject3.shapeColor = "green"; 
  gameObject4 = createSprite(400, 100, 50, 50); 
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  movingRect.x= World.mouseX
  movingRect.y= World.mouseY
  
 if(istouching(movingRect,gameObject1)) {
  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
 }
 else {
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";
 }
  drawSprites();
}

function istouching (o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2 && o1.y - o2.y < o2.height/2 + o1.height/2
      && o2.y - o1.y < o2.height/2 + o1.height/2) {
 // movingRect.velocityX = movingRect.velocityX * (-1);
  //fixedRect.velocityX = fixedRect.velocityX * (-1);

 

  return true
  }
else{
  //movingRect.velocityY = movingRect.velocityY * (-1);
  //fixedRect.velocityY = fixedRect.velocityY * (-1);

 

  return false
}

  
}