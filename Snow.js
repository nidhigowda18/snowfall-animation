class Snow{
    constructor(x,y,width,height)
    {
        var options={
            density:1,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("snow5.webp");
        World.add(world,this.body);
    }

    updateY()
    {
        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,800),y:0})
        }
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height); 
    }
}