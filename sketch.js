var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 

  for (i=0;i<=width;i=i+80) {
   divisions.push(new Divisions (i, height-divisionHeight/2,10,divisionHeight));
  }

   /*for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }*/


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
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(30);
  text ("Score : " + score, 50,20 )
 
  for (i = 30 ;i <= 800; i=i+80 ){
  textSize(18);
  text("500", i, 500)
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      
     
   }
 
  for (var j = 0; j < particles.length; j++) {
  
       particles[j].display();

     if(particles.body.position.y <=760){
      score = score + 500;
      }
    
   }
  /* for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }*/

   for (var i = 0; i < divisions.length ; i++) {
     divisions[i].display();
   }


}