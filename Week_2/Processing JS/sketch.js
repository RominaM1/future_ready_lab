//define a circle object
var circle = {
    diameter:80, 
    xCoor: 0, 
    yCoor: 0,
    color: [255,0,0], //RGB values give circle a red color
    xSpeed: 20,
    ySpeed: 20
}

function randomColor(){
    return[random (256), random (256), random (256)];
}

function setup() {
  createCanvas(1000, 680);
    background(255,204, 0);
    frameRate(15);
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
   
    console.log("The x coordinate is" + circle.xCoor);
    
    if(circle.xCoor >= 1000){
        circle.color = randomColor();
        circle.color = [0,0,0] //makes circle black
        circle.xSpeed = -circle.xSpeed; //reverse direction     
    }else if(circle.xCoor < 0){
        circle.color = randomColor();
        circle.color = [0,0,255]; //make the circle blue
        circle.xSpeed = -circle.xSpeed;
    }
    
    if(circle.yCoor < 0){
        circle.color = randomColor(); //make the circle change color whenever it hits the wall
        circle.ySpeed = -circle.ySpeed; 
        circle.diameter= random(20,60);//changes the size of the circle
        
    }else if(circle.yCoor > 680){
        circle.color = randomColor();
        circle.ySpeed = -circle.ySpeed;
        circle.diameter= random(25,60);//changes the size of the circle
    }
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}