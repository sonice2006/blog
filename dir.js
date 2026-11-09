function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}
let x = 1;
let dir = 1;
function draw() {
  background(220);
  circle(x,200,100);
  if(x>400) dir = -1;
  if(x< 0) dir = 1;
  x= x+3 * dir;
}