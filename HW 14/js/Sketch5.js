// Character X & Y
var characterX = 20;
var characterY = 20;

// Key Controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// Shape X & Y
var shapeX = 100;
var shapeY = 200;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

//Mouseclick Shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(1000, 600);
    //Random Shape Speed
    for (var i = 0; i < 30; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
        shapeXs[i] = getRandomNumber(1000);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
    //Call createCharacter
     createCharacter(50,50);
}
//Draw Function
function draw(){
    background(25,75,100);
    stroke(0);
    fill(0);

    //Call createBorders
    createBorders(15);
    
    //Exit Message
    textSize(30);
    text("EXIT", width - 95, height - 30)

    //Create Character
    drawCharacter();
    characterMovement();
    
    // Enemy
    fill(0, 100, 70);
    // Draw Shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        
        //Shape Movement
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        // Shape Boundaries 
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    //Character Exit Check
    if(characterX > width && characterY > width-900){
        fill(0);
        stroke(5);
        textSize(50);
        text("YOU ROCK!", width/2-135, height/2-20);
    }
    //Mouseclick Shape
    fill(0,0,50);
    circle(mouseShapeX, mouseShapeY, 50);
}

//characterMovement Function
function characterMovement()
{
    if(keyIsDown(w)){
        characterY -= 5;   
    }
    if(keyIsDown(s)){
        characterY += 5;   
    }
    if(keyIsDown(a)){
        characterX -= 5;   
    }
    if(keyIsDown(d)){
        characterX += 5;   
    }
}
//createCharacter Function
function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}
//drawCharacter Function
function drawCharacter() {
    fill(170,20,50);
    rect(characterX, characterY, 40);
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
//mouseClicked Function
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
//Random Number
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 15;
}