// Character X & Y
var characterX = 20;
var characterY = 20;

// Key Controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// Shape1 X & Y
var shape1X = 100;
var shape1Y = 100;
var shapeXSpeed;
var shapeYSpeed;

//Shape2 X & Y
var shape2X = 300;
var shape2Y = 500;
var shapeXSpeed;
var shapeYSpeed;

//Shape3 X & Y
var shape3X = 500;
var shape3Y = 100;
var shapeXSpeed;
var shapeYSpeed;

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
//Draw Function
function draw()
{
    background(25,75,100);
    stroke(0);
    fill(0);

    //Call createBorders
    createBorders(15);
    
    //Call exitMessage
    exitMessage();

    //Call drawCharacter
    drawCharacter();
    
    //Call characterMovement
    characterMovement();
    
    //Call createEnemy
    createEnemy();

    //Call enemySpeed
    enemySpeed();

    //Call enemyMovement
    enemyMovement();

    //Call enemyBoundaries
    enemyBoundaries();

    //Call characterBoundary
    characterBoundary();

    //Call winMessage
    winMessage();

    //Call circleClick Function
    circleClick();
}
//createCharacter Function
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}
//drawCharacter Function
function drawCharacter()
{
    fill(170,20,50);
    circle(characterX,characterY,40);
}
//characterMovement Function
function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
//characterBoundary Function
function characterBoundary()
{
    if(characterX > width)
    {
        shapeX = 0;
    }
    if(characterX < 0)
    {
        characterX = width;
    }
    if(characterY > height)
    {
        characterY = 0;
    }
    if(characterY < 0)
    {
        characterY = height;
    }
}
//exitMessage Function
function exitMessage()
{
    textSize(20);
    text("EXIT", width-65,height-30)
}
//createBorders Function
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
//createEnemy Function
function createEnemy()
{
    //Enemy1 (Shape1)
    fill(10,150,80);
    rect(shape1X, shape1Y,40);

    //Enemy2 (Shape2)
    fill(90,40,80);
    rect(shape2X, shape2Y,50);

    //Enemy3 (Shape3)
    fill(20,100,150);
    rect(shape3X, shape3Y,60);
}
//enemnyMovement Function
function enemyMovement()
{
    //Enemy1 Movement 
    shape1X += shapeXSpeed;
    shape1Y -= shapeYSpeed;

    //Enemy2 Movement 
    shape2X -= shapeXSpeed;
    shape2Y += shapeYSpeed;

    //Enemy3 Movement 
    shape3X == shapeXSpeed;
    shape3Y += shapeYSpeed;
}
//enemySpeed Function
function enemySpeed()
{
    //Enemy1 Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //Enemy2 Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

     //Enemy3 Speed
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
}
//enemyBoundaries Function
function enemyBoundaries()
{
    //Enemy1 Boundary
    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }

    //Enemy2 Boundary
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    //Enemy3 Boundary
    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }
}
//mouseClicked Function
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
//circleClick Function
function circleClick()
{
    fill(0,0,50);
    circle(mouseShapeX, mouseShapeY, 25);
}
//winMessage Function
function winMessage()
{
    if(characterX > width && characterY > width-900)
    {
        fill(0);
        stroke(5);
        textSize(55);
        text("Winner!", width/2-135, height/2-20);
    }
}