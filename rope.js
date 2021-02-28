class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB=bodyB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly(){
      this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
