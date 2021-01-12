class Slingshot{
    constructor(bodyA, point1){
        var options = {
            bodyA: bodyA,
            pointB: point1,
            stiffness: 0.04,
            length: 150,
        }
        this.pointB = point1;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(255);
        line(pointA.x, pointA.y, pointB.x, pointB.y);


    }
}
    
}