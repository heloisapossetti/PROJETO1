function setup() {
  createCanvas(1000, 800);
  background("#206164");
}

function draw() {
 
  fill("#E666A1");
  stroke("lightblue");
  if(mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
