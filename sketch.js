
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(312,257,450,20);

	bob1 = new Bob(312,427,25);
	rope1 = new Rope(bob1,roof1,0);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  bob1.display();
  //rope1.display();

  var x = mouseX;
  var y = mouseY;
  text(x + "," +y,x,y);
  
  drawSprites();
 
}



