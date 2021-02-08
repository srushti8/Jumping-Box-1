var canvas,box,surfaces1,surfaces2,surfaces3,surfaces4;
var music,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    surfaces1 = createSprite(10,200,10,90);
    surfaces1.shapeColor=("orange");
    surfaces2= createSprite(390,200,10,90);
    surfaces2.shapeColor=("pink");
    surfaces3= createSprite(200,10,90,10);
    surfaces3.shapeColor=("green");
    surfaces4= createSprite(200,390,90,10);
    surfaces4.shapeColor=("blue");

    //create box sprite and give velocity
    box = createSprite(200,200,15,15);
    box.shapeColor=("white");
    box.velocityY=0;
    box.velocityX=2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (box.isTouching(surfaces1)){
        box.shapeColor=("orange")
        box.velocityY=0;
        box.velocityX=0;
    }

    if (box.isTouching(surfaces2)){
        box.shapeColor=("pink")
        box.velocityY=0;
        box.velocityX=0; 
    }

    if (box.isTouching(surfaces3)){
        box.shapeColor=("green") 
        box.velocityY=0;
        box.velocityX=0;
    }

    if (box.isTouching(surfaces4)){
        box.shapeColor=("blue") 
        box.velocityY=0;
        box.velocityX=0;

    drawSprites();
}
