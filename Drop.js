class Drop{
    constructor(x,y){
        var options = {
density : 0.5,
            friction: 0.1,
            restitution: 0.5,
            isStatic: false
    
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.r = 5;
        World.add(world, this.rain);




    }

    updateY(){
if(this.rain.position.y> 300 ){
    Matter.Body.setPosition(this.rain,{x: random(0,400), y : random(0,300)})
}

    }


    display(){
        fill(0,200,255)
        ellipseMode(RADIUS)
        ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r)
    }
}