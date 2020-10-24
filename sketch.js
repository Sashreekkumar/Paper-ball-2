const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body

var engine, world;
var  bin1, bin2, bin3, ground;
var paper, bin4; 


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,595,1200,10)
    bin4= new Bin1(990,4650,255,250);
    bin2= new Bin(880,490,10,200);
    bin3= new Bin(1105,490,10,200);
    //bin1= new Bin1(1100, 490, 160, 210);

    paper= new Paper(200, 110)
    bin4.scale= 1;
}

function draw(){
    background(211, 211, 211);
    Engine.update(engine);
    paper.display();
  
    
    bin2.display();
    bin3.display();
   bin4.display();
   ground.display();
    keyPressed();
}

function keyPressed (){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position,{x:1.5, y:-1.5});
}

}