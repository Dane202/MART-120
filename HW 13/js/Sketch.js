//Player
var x = 50;
var y = 50;

//Key Codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//Mouseclick Shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(1000, 600);
    //Random Shape Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    createCharacter(50,50);
}

function draw()
{
    background(25,75,100);
    stroke(0);
    fill(0);

    //Call createBorders
    createBorders(15);
}
//borders
function createBorders(thickness)
{
    //Top Border
    rect(0,0,width,thickness);
    //Left Border
    rect(0,0,thickness,height);
    //Right Border
    rect(width-thickness,0,thickness,height-65);
    //Bottom Border
    rect(0, height-thickness,width, thickness);
}
//exitMessage Function
function exitMessage()
{
    textSize(20);
    text("EXIT", width-65,height-30)
}