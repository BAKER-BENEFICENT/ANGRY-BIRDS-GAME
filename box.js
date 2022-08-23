class Box
{
    constructor(x, y, width, height)
    {
        var options =
        {
            density : 1.7,

            friction : 1

        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.x = x;
        this.y = y;
        this.width = width;
        this. height = height;
        World.add(world, this.body);
        this.image = loadImage("assets/log2.png");

    }

    display()
    {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();

    }

}