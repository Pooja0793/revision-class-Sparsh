
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var myworld;
var ball;
var ground;
function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  myworld =engine.world;

  Engine.run(engine);
var balloptions= {
  restitution : 1
}
  ball = Bodies.circle(200,200,20,balloptions);
World.add(myworld,ball);
console.log(ball);

var options = {
  isStatic : true
}
ground = Bodies.rectangle(200,390,400,20,options);
World.add(myworld,ground);
console.log(ground);

}

function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,40,40);

  fill("brown");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
}

