class Bob{

    constructor(x,y,diameter){

        var options ={

            isStatic:true,
            restitution:0.7,
            friction:0.5,
            density:0.6
        }

        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;

        this.body.debug = true;
        
        
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("green");
        circle(0,0,this.radius);
        
        pop()
    }


    
}

