class Target {
    constructor(x, y) {
        var options = {
            'density': 0.3,
            'friction': 0.3,
            'frictionStatic': 0.8,
            'restitution': 0.4,
            'isStatic': false
        }
        this.w = 20;
        this.h = 25;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(0, 0, this.w, this.h);
        pop();
    }
}