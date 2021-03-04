let canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(-90);
  
  let h = hour();
  let m = minute();
  let s = second();
  
 // print(h+":"+m+":"+s);
  
  let x = Math.min(width, height) * 0.9;
  let x2 = x * 0.9;
  let x3 = x * 0.8;
	
  strokeWeight(35 / 1000 * x);
  stroke(255,100,150);
  noFill();
  
  let secondAngle = map(s,0,60,0,360);
  arc(0, 0, x, x, 0, secondAngle);
  
  stroke(150,100,255);
  let minuteAngle = map(m,0,60,0,360);
  arc(0, 0, x2, x2, 0, minuteAngle);
  
  stroke(150,255,100);
  let hourAngle = map(h%12 ,0 ,12 , 0, 360);
  arc(0, 0, x3, x3, 0, hourAngle);
  
  push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0, 0, (x*88)/200, 0);
  pop();
  
  push();
  rotate(minuteAngle);
  stroke(150,100,255);
  line(0, 0, (x2*60)/200, 0);
  pop();
  
  push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0, 0, (x3*40)/200, 0);
  pop();
  
  stroke(265);
  point(0,0);
  
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}