var wall , thickness ;
var bullet , speed , weight ;

function setup() {
  createCanvas(1600, 400);
  wall = createSprite(1200,200,thickness,height/2)
  speed=random(100,200);
  weight=random(30,52);
  bullet=createSprite(500,250,20,20)
  bullet.velocityX= speed;
  bullet.weight= weight;
  
}



function draw() {
  background("white");
  thickness = random(22,83)

  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness* thickness * thickness);
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}

  }
  drawSprites();
 
  
}

function hasCollided(fbullet,fwall)
{

bulletRightEdge=fbullet.x+fbullet.width;
wallLeftEdge=fwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;

}