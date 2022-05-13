var ballx = 350;
var bally = 350;
var ballSize = 50;
var score = 0;
var gameLevel = "L1"; 

function setup(){
    createCanvas(1000,800);
    textAlign(CENTER);
    textSize(30);
    
    //ALERT
    alert('Catch Me! \n\nDIRECTIONS: Use your mouse to track down the ball and score points.');

} //end setup

function draw(){
    background(125);
    if(gameLevel == "L1"){
    levelOne();
    }
    if(gameLevel == "L2"){
        levelTwo();
    }
    if(gameLevel == "L3"){
        levelThree();
    }
    text(("Score: " + score),width/2,50);
} //end draw

function levelOne(){
    text("Level 1",width/2,height-40);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
        ballx = random(width);
        bally = random(height);
        score = score + 1;
    }
    if(score>=5) {
        gameLevel = "L2";
    }
    ellipse(ballx, bally, ballSize, ballSize);
    line(ballx, bally, mouseX, mouseY);
} //end levelOne

function levelTwo(){
    background(150,30,0);
    text("Level 2",width/2,height-40);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
        ballx = random(width);
        bally = random(height);
        score = score + 1;
    }
    if(score>=10) {
        gameLevel = "L3"
    }
    ellipse(ballx, bally, ballSize, ballSize);
} //end levelTwo

function levelThree(){
    background(0,90,150);
    text("Level 3",width/2,height-40);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
        ballx = random(width);
        bally = random(height);
        score = score + 1;
        ballSize = ballSize -5;
    }
    if(score>=15) {
        textAlign(CENTER);
        text("You Win!", width/2, height/2-20);
        textSize(50);
    }
    ellipse(ballx, bally, ballSize, ballSize);
} //end levelThree
