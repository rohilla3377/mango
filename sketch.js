
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	trrieng=loadimage("tree.png");
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    dground=new Ground();
    stones=new Stone(180,460,34);
	mango1=new mango(600,290,34);
    mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);
	mango7=new mango(825,170,33);
	mango8=new mango(880,260,35);
	mango9=new mango(940,220,35);
	mango10=new mango(980,220,35);

	attach=new Throw(stone.body,{x:100,y:465});

	tree=createSprite(755,368);
	tree.addImage(treeing);
	tree.scale=0.42;

	boy=createSprite(775,368);
	boy.addImage(boying);
	tree.scale=0.42;
	
	
	Engine.run(engine);

}

function draw() {
   rectMode(CENTER);
  background("grey");
  
  fill("black");
  textsize(18);


  detectcollision(stones,mongo1);
  detectcollision(stones,mongo2);
  detectcollision(stones,mongo3);
  detectcollision(stones,mongo4);
  detectcollision(stones,mongo5);
  detectcollision(stones,mongo6);
  detectcollision(stones,mongo7);
  detectcollision(stones,mongo8);
  detectcollision(stones,mongo9);
  detectcollision(stones,mongo10);


  drowSprites();
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();
  stone9.display();
  stone10.display();

}
function mouseDragged();{
    matter.Body.setposition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();

}
function detectCollosion(lstones,lmango){

	if(lstones.body.position.x-lmango.body.position.x <lmango.diametre + lstones.diametre
	&& lmango.body.position.x - lstones.body.position.x  <lmango.diametre + lstones.diametre
	&&lstones.body.position.y - lmango.body.position.y <lmango.diametre
	}


