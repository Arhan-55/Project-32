const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,stand;
var ball,launcher;
var can1,can2,can3,can4,can5,can6,can7,can8,can9,can10,can11,can12,can13,can14,can15,can16,can17,can18,can19,can20,can21,can22,can23,can24,can25,can26,can27,can28,can29,can30,can31,can32,can33,can34,can35,can36,can37,can38,can39,can40,can41,can42,can43,can44,can45,can46,can47,can48,can49;

function preload(){
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

   ground = new Ground(650,615,1300,50);
   stand = new Ground(915,550,750,10);

   ball = new Ball(200,300,70);
   launcher = new Launcher(ball.body,{x:200,y:300});

   //level one 
   //violet
   can1 = new Can(590,510,50,70);
   can2 = new Can(640,510,50,70);
   can3 = new Can(690,510,50,70);
   can4 = new Can(740,510,50,70);
   can5 = new Can(790,510,50,70);
   can6 = new Can(840,510,50,70);
   can7 = new Can(890,510,50,70);
   can8 = new Can(940,510,50,70);
   can9 = new Can(990,510,50,70);
   can10 = new Can(1040,510,50,70);
   can11 = new Can(1090,510,50,70);
   can12 = new Can(1140,510,50,70);
   can13 = new Can(1190,510,50,70);

   //level two
   //indigo
   can14 = new Can(640,440,50,70);
   can15 = new Can(690,440,50,70);
   can16 = new Can(740,440,50,70);
   can17 = new Can(790,440,50,70);
   can18 = new Can(840,440,50,70);
   can19 = new Can(890,440,50,70);
   can20 = new Can(940,440,50,70);
   can21 = new Can(990,440,50,70);
   can22 = new Can(1040,440,50,70);
   can23 = new Can(1090,440,50,70);
   can24 = new Can(1140,440,50,70);

   //level three
   //skyblue
   can25 = new Can(690,370,50,70);
   can26 = new Can(740,370,50,70);
   can27 = new Can(790,370,50,70);
   can28 = new Can(840,370,50,70);
   can29 = new Can(890,370,50,70);
   can30 = new Can(940,370,50,70);
   can31 = new Can(990,370,50,70);
   can32 = new Can(1040,370,50,70);
   can33 = new Can(1090,370,50,70);

   //level four
   //green
   can34 = new Can(740,300,50,70);
   can35 = new Can(790,300,50,70);
   can36 = new Can(840,300,50,70);
   can37 = new Can(890,300,50,70);
   can38 = new Can(940,300,50,70);
   can39 = new Can(990,300,50,70);
   can40 = new Can(1040,300,50,70);

   //level five
   //yellow
   can41 = new Can(790,230,50,70);
   can42 = new Can(840,230,50,70);
   can43 = new Can(890,230,50,70);
   can44 = new Can(940,230,50,70);
   can45 = new Can(990,230,50,70);

   //level six
   //orange
   can46 = new Can(840,160,50,70);
   can47 = new Can(890,160,50,70);
   can48 = new Can(940,160,50,70);
   
   //top
   //red
   can49 = new Can(890,90,50,70);
  }

function draw() {
  background("black");
  Engine.update(engine);
  
  fill("skyblue");
  ground.display();

  fill("brown")
  stand.display();
  launcher.display();
  
  ball.display();

  //violet
  fill("purple")
  can1.display();
  can2.display();
  can3.display();
  can4.display();
  can5.display();
  can6.display();
  can7.display();
  can8.display();
  can9.display();
  can10.display();
  can11.display();
  can12.display();
  can13.display();

  //indigo
  fill("darkblue");
  can14.display();
  can15.display();
  can16.display();
  can17.display();
  can18.display();
  can19.display();
  can20.display();
  can21.display();
  can22.display();
  can23.display();
  can24.display();

  //skyblue
  fill("#078EF7");
  can25.display();
  can26.display();
  can27.display();
  can28.display();
  can29.display();
  can30.display();
  can31.display();
  can32.display();
  can33.display();

  //green
  fill("#73BA43");
  can34.display();
  can35.display();
  can36.display();
  can37.display();
  can38.display();
  can39.display();
  can40.display();

  //yellow
  fill("yellow");
  can41.display();
  can42.display();
  can43.display();
  can44.display();
  can45.display();

  //orange
  fill("orange");
  can46.display();
  can47.display();
  can48.display();

  //red
  fill("red");
  can49.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
   if(keyCode === 32){
      Matter.Body.setPosition(ball.body,{x:200,y:400});
      launcher.attach(ball.body);
  }
}