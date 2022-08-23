class Log
{
    constructor(x, y, height, angle)
    {
        var options = 
        {
            density : 1.7,
            friction : 2,
            restitution : 0.9
        }

        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = height;
        World.add(world, this.body);
        Body.setAngle(this.body, angle)
        this.image = loadImage("assets/log2.png")

    }

    display()
    {
        imageMode(CENTER);
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}