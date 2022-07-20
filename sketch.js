const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var botao1;
var botao2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ball_options = {
  restitution: 0.95
  }

  ball = Bodies.circle(200,100,10,ball_options);

  World.add(world,ball);

  botao1 = createImg("right.png");
  botao1.position(220,30);
  botao1.size(50,50);
  botao1.mouseClicked(hforce)
  
  botao2 = createImg("up.png");
  botao2.position(20,30);
  botao2.size(50,50);
  botao2.mouseClicked(vforce)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  
  Engine.update(engine);
}

function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}







