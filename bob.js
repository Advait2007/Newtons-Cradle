
class Bob{
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 50);
        this.image = loadImage("bob.jpg");
        this.scale = 5;
        World.add(world, this.body);
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 20,20);
        pop();
      }
}
      