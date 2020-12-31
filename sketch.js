
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,binImg;
var ball;
var ground,engine,world;

function preload()
{
	binImg=loadImage("dustbingreen.png");
}

function setup() {
	var canvas=createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;
	
    Paper = new Paper(100,200,20);
	ground = new Ground();

	bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

	binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}



function draw() {
  background(0);
 Engine.update(engine);

    ground.display();
    bin1.display();
    bin2.display();
    bin3.display();
    paper.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:75,y:-75});

	}
}