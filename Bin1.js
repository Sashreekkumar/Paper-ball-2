class Bin1{
    constructor(x,y,width, height){
        var options= {
            isStatic:true,
            'density': 0
        }
        this.body= Bodies.rectangle(x,y,width, height, options);
        this.width= width;
        this.height= height;
        this.image= loadImage("dustbingreen.png");
        this.image.scale=10;
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position; 
        imageMode(CENTER);
        image(this.image, 990, 490, this.width, this.height);
    }

}
