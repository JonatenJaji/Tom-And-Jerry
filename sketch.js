var mouse1,mouse2;
var bgimg;
var cat1,cat2;
var cat,mouse;
function preload() {
    //load the images here
  bgimg = loadAnimation("images/garden.png")
  cat1 = loadAnimation("images/cat1.png")
 mouse1 = loadAnimation("images/mouse1.png")
 cat2 = loadAnimation("images/cat4.png")
 mouse2 = loadAnimation("images/mouse4.png")           
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
   cat = createSprite(800,400,70,70);
   cat.addAnimation("jjf",cat2)
   
   mouse = createSprite(50,400,80,80);
   mouse.addAnimation("ljn",mouse2);
}

function draw() {
    background("bgimg");
    
    //Write condition here to evalute if tom and jerry collide
  

scale(0.2)



mouse.display();
cat.display();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("jij",mouse1)
    mouse.changeAnimation("jij")
    mouse.frameDelay = 25;
}
if(keyCode === RIGHT_ARROW){
    cat.addAnimation("lkl",cat1)
    cat.changeAnimation("lkl")
    cat.frameDelay = 25;
}
}
