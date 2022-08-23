    class Slingshot
{
    constructor(body, point)
    {
        var options =
        {
            bodyA : body,
            pointB : point,
            stiffness : 0.03,
            length : 10,

            friction : 1

        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.image = loadImage("assets/slingshot.png");

    }

    display()
    {

        if(this.sling.bodyA)
        {
            var point_1 = this.sling.bodyA.position;
            var point_2 = this.sling.pointB;
            // line(point_1.x, point_1.y, point_2.x, point_2.y);
            push();
            stroke(48, 22, 8);
            strokeWeight(12);
            if(point_1.x <220)
            {
                line(point_1.x -20, point_1.y, point_2.x -10, point_2.y);
                line(point_1.x -20, point_1.y, point_2.x +30, point_2.y);
            }

            else
            {
                line(point_1.x +25, point_1.y, point_2.x -10, point_2.y);
                line(point_1.x +25, point_1.y, point_2.x +30, point_2.y);
            }

            pop();
        }

        image(this.image, 200, 125, 75, 150);


    }

    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

}