class Spring {
    constructor(body, point) {
        var options = {
            'bodyA': body,
            'pointB': point,
            'length': 0,
            'stiffness': 0.04
        }
        this.spring = Matter.Constraint.create(options);
        World.add(world, this.spring);
    }

    shoot() {
        this.spring.bodyA = null;
    }

    attach(body)
    {
      this.spring.bodyA=body;
    }

    display() {
        if (this.spring.bodyA) {
            var pos_body = this.spring.bodyA.position;
            var pos_point = this.spring.pointB;

            stroke("white");
            strokeWeight(2);
            line(pos_body.x, pos_body.y, pos_point.x, pos_point.y);
        }
    }
}