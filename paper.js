class Paper {
constructor(x,y){
    var options={
        isStatic: false,
        'restitution': 0.3,
        'friction': 50,
        'density': 0.1
  
      }
      this.x= x
      this.y= y
      this.body = Bodies.circle(this.x, this.y, 60, options);
      this.image= loadImage("paper.png");
      this.image.scale= 0.3;
      World.add(world, this.body);
}

display(){
    push()
translate(this.body.position.x, this.body.position.y)
imageMode(CENTER)
image(this.image, 0,0, this.r, this.r)
pop()
}
}


