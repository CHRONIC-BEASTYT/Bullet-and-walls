var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bullet=createSprite(50, 200, 40, 20);
  wall=createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
  
}

function draw() {
  background(0,0,0); 
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=color(255,255,255);
  if(hasCollided(bullet, wall)) {
bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);


if(deformation>10){
wall.shapeColor=color(255,0,0);
}

if(deformation<10){
  wall.shapeColor=color(0,255,0);
  }


  }
  drawSprites();
}
function hasCollided(bullet, wall){
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){

return true;

}
return false
}



