class Rock {
    constructor(x, y) {
        var options = {
            'density': 0.4,
            'friction': 0.3,
            'restitution': 0.2,
        }
        this.radius = 15;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        ellipseMode(RADIUS);
        noStroke();
        fill(rgb(0, 125, 255));
        ellipse(pos.x, pos.y, this.radius);
    }
}