var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var gSlider;
var newbox = [];
 
 
function setup()
 {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    gSlider = createSlider(0,100,50);
    gSlider.position(40,200);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    ground = new Ground(200,390,400,20)

}
 
function mousePressed() 
{
    if (mouseY < 380 )
    {
      newbox.push(new Box(mouseX, mouseY,random(10,70),random(10,60)));
    }
}

 
function draw()
 {
    background("yellow");
 
    for (var i = 0; i < newbox.length; i++)
    {
    newbox[i].show();
    }
    

    text("GRAVITY",80,240)
    ground.display();
   
}

function Box(x,y,width,height,options)
 {
    var options = 
    {
        friction: 0.5,
        restitution: 0.5,
    }
 
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
 
    this.show = function () 
    {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}

 