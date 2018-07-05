//define a circle object
/*var circle = {
    diameter:80, 
    xCoor: 0, 
    yCoor: 0,
    color: [255,0,0], //RGB values give circle a red color
    xSpeed: 20,
    ySpeed: 20
}
*/

function Circle(xCoor, yCoor, size, color, xSpeed, ySpeed){
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.diameter = size;
    this.color = color || [0,0,0]; //makes the default color black
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 7;
}

var circle = new Circle(0, 0, 80, [255,0,0], 2, 10)
var circle2 = new Circle(0,30,50);
var circleList = [circle, circle2, new Circle(0,0,10)];
var circleList = [];

function setup() {
    createCanvas (parseInt(prompt("Insert a value for the width")),parseInt(prompt("Insert a value for the height")));//tells the user to enter the size of the canvas
    makeCircles();
}

function makeCircles(){
    var balls = random([2,5,9,16]);
    for (b=0; b<balls; b++){
        circleList.push(new Circle(random(width), random(height),10, [0,0,0], 5,5))
    }
}

function randomColor(){
    return [random (0,256), random(0,256), random(0,256)]
}

function draw() {
    background(0);
    for(var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
    ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
   
    
    if(circleList[i].xCoor >= width){
        circleList[i].color = randomColor();
        circleList[i].diameter = random(20,60);
        circleList[i].xSpeed = -circleList[i].xSpeed; //reverse direction     
    }else if(circleList[i].xCoor < 0){
        circleList[i].color = randomColor();
        circleList[i].diameter = random(25,60) 
        circleList[i].xSpeed = -circleList[i].xSpeed;
    }
        if(circleList[i].yCoor < 0){
        circleList[i].color = randomColor(); //make the circle change color whenever it hits the wall
        circleList[i].ySpeed = -circleList[i].ySpeed; 
        circleList[i].diameter= random(20,60);//changes the size of the circle
        
    }else if(circleList[i].yCoor >= height){
        circleList[i].color = randomColor();
        circleList[i].ySpeed = -circleList[i].ySpeed;
        circleList[i].diameter= random(25,60);//changes the size of the circle
    }
    circleList[i].xCoor += circleList[i].xSpeed;
    circleList[i].yCoor += circleList[i].ySpeed;
        
    }
    
    
}