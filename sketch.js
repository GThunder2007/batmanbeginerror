const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
var engine, world;
var drops;
var createdrops =[]
var  um;
var random1
var maxDrops = 100
var counter = 0;
function preload(){
    thunderbolt1 = loadImage('images/thunderbolt/1.png');
    thunderbolt2 = loadImage('images/thunderbolt/2.png');
    thunderbolt3 = loadImage('images/thunderbolt/3.png');
    thunderbolt4 = loadImage('images/thunderbolt/4.png');
   
}

function setup(){
   createCanvas(400,600);
   
   //drops = new Drop(random(50,300),random(50,500));
   engine = Engine.create();
   world = engine.world;
   //console.log(frameCount)

  
   //console.log(counter)
   if(counter % 250 == 0){

    for(var i=0; i<maxDrops; i++){
        createdrops.push(new Drop(random(0,400), random(0,400)));
    }

}
um = new Umbrella(200,400);
  

random1 = Math.round(random(1,4));
if(counter% 100 == 0){
    thunder = createSprite(random(20,380),random(20,80),10,10);
switch(random1){

case 1: thunder.addImage(thunderbolt1)
break;
case 2: thunder.addImage(thunderbolt2)
break;
case 3: thunder.addImage(thunderbolt3)
break;
case 4: thunder.addImage(thunderbolt4)
break;
default:
    break;

}



}

}


function draw(){
    background(0);
    Engine.update(engine);
    counter++
    console.log(counter)
    for( var i = 0 ; i<maxDrops ; i++){
    createdrops[i].display();
    createdrops[i].updateY();
    
    }
    um.display();

   /* switch case {

        case:

    }*/
    drawSprites()
}   

