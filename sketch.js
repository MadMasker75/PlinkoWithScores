var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;

var score =0;

var turn = 0;

var gameState ;
var start = 1 ;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {  
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,375));
    } 
    
}
function draw() {

  background("black");

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("Score : "+score,40,40);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("500",20,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("500",100,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("500",180,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("500",260,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("100",340,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("100",420,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("100",500,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("200",580,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("200",660,650);

  textSize(20);
  textFont("Georgia");
  fill("white");
  text("200",740,650);

  Engine.update(engine);
  ground.display();
  if (gameState === "end"){
    textSize(100);
    text("GameOver",150,250);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   if (particle != null)
   {
     particle.display();
     //particles.push(particle);
    if(particle.body.position.y > 760 ){
     if (particle.body.position.x < 300 ) 
             {
                 score=score+500;      
                 particle=null;
                 if ( turn>= 5) gameState ="end";
             }
             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( turn>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601   )
             {
                   score = score + 200;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";
                  
             }
            }
   }

  /*for (var j = 0; j < particles.length; j++) {
  
     particles[j].display();
   } */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   //console.log(score);
}

function mousePressed(){
  if ( gameState !== "end")
  {
    turn++;
    particle = new Particle(mouseX,10,10,10);

  }
}