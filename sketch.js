const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,groungimage,ground,airground,randx;

var handle;

function setup() {

  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  handle = new Handle(400,100,400,30);
  
  bob1 = new Bob(360,400);
  bob2 = new Bob(380,400);
  bob3 = new Bob(400,400);
  bob4 = new Bob(420,400);
  bob5 = new Bob(440,400);

  chain1 = new chain(handle.body,bob1.body);
  chain2 = new chain(handle.body,bob2.body);
  chain3 = new chain(handle.body,bob3.body);
  chain4 = new chain(handle.body,bob4.body);
  chain5 = new chain(handle.body,bob5.body);
}


function draw() {
  background(80,80,80);
  Engine.update(engine);

  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  handle.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();


if(bob1.body.position.x<360){
  bob1.body.position.x = bob1.body.position.x + 10;
}

if(bob5.body.position.x>440 ){
  bob5.body.position.x = bob5.body.position.x - 10;
}

if(bob1.body.position.x == 340){
  bob5.body.position.x = bob5.body.position.x + 50;
}

if(bob5.body.position.x == 460){
  bob1.body.position.x = bob1.body.position.x - 50;
}

  drawSprites();
}


function keyPressed(){
  if((keyCode === 32) && (mouseX>=440)){
    bob5.body.position.x = mouseX;
  }
  if((keyCode === 13) && (mouseX<=360)){
    bob1.body.position.x = mouseX;
  }
}

