const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var ground1;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");

}
function setup() {
  var canvas = createCanvas(1200,500);

  //creating the engine
  engine = Engine.create();
  world = engine.world;  

  // create sprites here
  ground1 = new Ground(381,320,760,20);
  hero1 = new Hero(361,285,240,140);
  rope1 = new Rope(hero1.body,{x:270,y:100});
  box1 = new Box(590, 100, 50, 50);
  box2 = new Box(590, 100, 50, 50);
  box3 = new Box(590, 100, 50, 50);
  box4 = new Box(590, 100, 50, 50);
  box5 = new Box(590, 100, 50, 50);
  //monster1 = new Monster(690, 100, 240, 150);


}
function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();
  hero1.display();
  rope1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //monster1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
  rope.fly();
}
