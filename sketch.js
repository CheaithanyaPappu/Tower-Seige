const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;


var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygonimg;

function preload () {
polygonimg = loadImage ("polygon.png");
    
}


function setup () {
    var canvas = createCanvas (1200,600);
    engine = Engine.create();
    world = engine.world;

ground = new Ground(380,300,270,10);
stand1 = new Platform(340,290,250,10);
polygon = Bodies.circle(100,200,10);

World.add(world,polygon);
slingShot = new Sling (polygon,{x:100,y:100})

//firstlevel

block1 = new Block(280,275,30,40);
block2 = new Block(310,275,30,40);
block3 = new Block(340,275,30,40);
block4 = new Block(370,275,30,40);
block5 = new Block(400,275,30,40);

//secondlevel

block6 = new Block(295,240,30,40);
block7 = new Block(325,240,30,40);
block12 = new Block(355,240,30,40);
block8 = new Block(385,240,30,40);

//thirdlevel

block9 = new Block(310,205,30,40);
block10 = new Block(340,205,30,40);
block11 = new Block(370,205,30,40);
block13 = new Block(360,180,30,40);
block14 = new Block(330,180,30,40);
block15 = new Block(345,150,30,40);


}

function draw () {

background("black");
Engine.update(engine);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block6.display();
block14.display();
block15.display();

slingShot.display();

stand1.display();
imageMode(CENTER);

image(polygonimg,polygon.position.x,polygon.position.y,25,25);



}


function mouseDragged() {

Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})


}


function mouseReleased () {
slingShot.fly();





}