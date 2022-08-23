const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const Body = Matter.Body;

var ground;
var bird;

var pig1, pig2;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var bg;

var slingshot;
var platform;

function preload() {
  bg = loadImage("assets/background.png")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  //angleMode(DEGREES);

  ground = new Ground(width /2, height, width, 20);

  platform = new Ground(150, 400, 300, 400)

  bird = new Bird(1000, 300);
  pig1 = new Pig(810, 350);
  pig2 = new Pig(810, 220);
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  box5 = new Box(810, 160, 70, 70);
  log1 = new Log(810, 260, 300, PI/2);
  log2 = new Log(810, 180, 300, PI/2);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);

  imageMode(CORNER);

  slingshot = new Slingshot(bird.body,
    {
      x : 200,
      y : 75
    })

}

function draw() {
  background(255);

  image(bg, width/2, height/2, width, height);

  Engine.update(engine);

  ground.show();
  bird.display();

  pig1.display();
  pig2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();

  slingshot.display();
  platform.show();
  
}

  function mouseDragged()
  {
    Matter.Body.setPosition(bird.body, {x : mouseX, y : mouseY});
  }

  function mouseReleased()
  {
    slingshot.fly();
  }

  function keyPressed()
  {
    if(keyCode === 32)
    {
      slingshot.attach(bird.body);
    }
  }