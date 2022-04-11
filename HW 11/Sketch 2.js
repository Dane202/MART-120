//variables
var pupils1X = 215;
var pupils1Y = 175;
var pupilsDirecton = 1;

var pupils2X = 280;
var pupils2Y = 175;
var pupilsDirecton = 1;
var movement = Math.floor(Math.random() * 2) + 1;

var headX = 255;
var headY = 200;
var movement2 = Math.floor(Math.random() * 2) + 1;
var headDirection = 1;

function setup()
{
    
    createCanvas (500, 600);

}

function draw()
{
    background(120,45,78);
    stroke('Black');
    strokeWeight(2);
    
    //hair
    fill('#fae');
    circle(250,170,200);
    
    //head
    fill(255, 204, 0);
    circle(headX,headY,200);
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    {    
     headX += movement2;
    }

    //mouth
   fill('red')
   arc(247, 240, 70, 80, 0, 3.14);
   line(215, 240, 280, 240);
   
   //body
    fill('red');
    rect(187,290,125,225);
   
    //pants
    fill('blue')
    rect(187,500,125,225);

    //rightarm
    fill(255, 204,0);
    rect(315,295,100,45);
    circle(400,318,50);
    
    //leftarm
    fill(255, 204, 0);
    rect(85,295,100,45);
    circle(90,320,50);
   
    //eyes
    fill('white');
    circle(215,175,50);
    circle(280,175,50);
    
    //pupils
    strokeWeight(4);
    stroke('blue');
    point(pupils1X, pupils1Y);
    point(pupils2X,pupils2Y);
    //pupils1X += pupilsDirecton;
    if(pupils1X >= 265|| pupils1X <= 265 )
    {
        pupilsDirecton *= -1;
        
    }
    {
        pupils1X += movement;
    }

     //nose
    stroke('black');
    strokeWeight(2);
    fill(265, 214, 0);
    ellipse(247, 210, 30, 45);

    //decorations
    fill('green');
    triangle(215, 325, 245, 375, 280, 325);

    //titile
    fill('white');
    textSize(70);
    text('This is me', 80,65);
   
    //signiture
    textSize(20);
    text('Dane Thompson', 327, 570);
}
