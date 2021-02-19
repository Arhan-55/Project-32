class Ball{
    constructor(x,y,r){
      var options = {
          isStatic: false,
          restitution : 0.5,
          friction:5,
          density:1.0

      }

      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r/1.7,options);
      World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("blue");
        fill("blue");
        ellipse(0,0,this.r,this.r,stroke("white"),strokeWeight(5));
        ellipse(0,0,this.r,this.r);
        pop();
    }
};