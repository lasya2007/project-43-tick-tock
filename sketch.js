var hr,min,sec;
var scAngle,minAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0);
  
  hr = hour()%12;
  min = minute();
  sec = second();

  angleMode(DEGREES);

  scAngle = map(sec ,0,60,0,360);
  minAngle = map(min ,0,60,0,360);
  hrAngle = map(hr ,0,12,0,360);

 
  strokeWeight(7);
  translate(400,200);
 
  push();
  stroke(255,0,0);
  push();
  rotate(scAngle);
  line(0,0,0,-100);
  pop();
  rotate(-90);
  noFill();
  arc(0,0,225,225,0,scAngle);
  pop();

  push();
  stroke(0, 255,0);
  push();
  rotate(hrAngle);
  line(0,0,0,-30);
  pop();
  rotate(-90);
  noFill();
  arc(0,0,255,255,0,hrAngle);
  pop();

  push();
  stroke(0,0,255);
  push();
  rotate(minAngle);
  line(0,0,0,-70);
  pop();
  rotate(-90);
  noFill();
  arc(0,0,240,240,0,minAngle);
  pop();
  drawSprites();
}