var hr, mn, sc;

var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background(0,0,0);  

  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  translate(400,200);

  push();
  rotate(hrAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(mnAngle-90);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,85,0);
  pop();

  push();
  rotate(scAngle-90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  noFill();
  stroke(0,0,255);
  strokeWeight(15)
  arc(0,0,290,290,-90,mnAngle-90)

  stroke(255,0,0);
  strokeWeight(15)
  arc(0,0,250,250,-90,hrAngle-90)

  stroke(0,255,0);
  strokeWeight(15)
  arc(0,0,330,330,-90,scAngle-90);

  drawSprites();
}