class paper{
    constructor(x,y,r){
        var options={
            restitution: 0.4,
            friction: 0.5,
            density: 1.0
        }
       
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        push();

        translate(pos.x,pos.y);
       ellipseMode(RADIUS);
       fill("red");
        ellipse(0,0,this.r);
        pop();
    }
}