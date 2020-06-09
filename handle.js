
class Handle{
    constructor(x, y,width,height) {
        this.body = Bodies.rectangle(x, y, width,height);
        
        this.image = loadImage("wood2.png");
        this.scale = 10;
        World.add(world, this.body);
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 200,30);
        pop();
      }
}
