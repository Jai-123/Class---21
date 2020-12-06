var mr,fr
var ob1,ob2

function setup() {
  createCanvas(800,400);
mr = createSprite(400,200,50,50)
fr = createSprite(200,200,50,50)
mr.shapeColor = "red"
fr.shapeColor = "orange"
ob1 = createSprite(100,100,50,50)
ob2 = createSprite(50,50,50,50)
}

function draw() {
  background(255,255,255);
  mr.x = mouseX
  mr.y = mouseY  
  drawSprites();
  if(collide(mr,ob1)){
    mr.shapeColor = "yellow"
    ob1.shapeColor = "yellow"
  }
  else{
    mr.shapeColor = "red"
    ob1.shapeColor = "blue"
  }
}
