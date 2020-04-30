const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine;
var world;
var ground;
var air_platform;

var rocks=[];
var rock;
var spring;

var airT1, airT2, airT3, airt4;
var T1, T2, T3, T4, T5;

var state = 0;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 400, 800, 20);
  air_platform = new Ground(600, 150, 120, 10);

  rock = new Rock(200, 200);
  rocks.push(rock);
  spring = new Spring(rock.body, { x: 200, y: 200 });

  T1 = new Target(600, 350);
  T2 = new Target(630, 350);
  T3 = new Target(570, 350);
  T4 = new Target(615, 300);
  T5 = new Target(585, 300);
  T6 = new Target(600, 280);

  // airT1 = new Target(600, 350);
  // airT2 = new Target(600, 350);
  // airT3 = new Target(600, 350);
  // airT4 = new Target(600, 350);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  air_platform.display();


  for(var i=0;i<rocks.length;i++)
  {
    rocks[i].display();
  
  }

  spring.display();

  T1.display();
  T2.display();
  T3.display();
  T4.display();
  T5.display();
  T6.display()
}

function mouseDragged() {
  if (state == 0) {
    Matter.Body.setPosition(rocks[rocks.length-1].body, { x: mouseX, y: mouseY });
    Matter.Body.setStatic(rocks[rocks.length-1].body, false);
  }
}

function mouseReleased() {
  if (state == 0) {
    spring.shoot();
    rock=new Rock(200,200);
    rocks.push(rock);
    spring.attach(rock.body);
   // state = 1;
  }
}