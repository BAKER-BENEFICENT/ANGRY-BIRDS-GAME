class Bird
{
    constructor(x, y)
    {

        var options =
        {
            density : 1.6,

            friction : 1

        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
        this.image = loadImage("assets/bird.png")
    }

    display()
    {
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;

        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)

        imageMode(CENTER);
        fill("red");
        //rect(this.body.position.x, this.body.position.y, this.width, this.height);
        image(this.image, 0, 0, this.width, this.height);

        pop();

    }
}