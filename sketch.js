function preload() {

}
//The explosive Rose

var k = 5 / 8;
var j = 5 / 2;


function setup() {
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  noFill();
  background('#24003D')
  translate(width / 2, height / 2);


  rotate(frameCount * 6);
  strokeWeight(1);

  const herpColorGradient = (cos(frameCount / 30) + 1) / 2;

  beginShape();
  stroke(lerpColor(color('blue'), color('red'), herpColorGradient));
  for (var a = 0; a < TWO_PI * 8; a += 0.02) {
    var r = calculateRadius() * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);

    vertex(x, y);
  }
  endShape(CLOSE);

  //rosa2


  beginShape();

  stroke(lerpColor(color('blue'), color('red'), herpColorGradient));

  for (var a = 0; a < TWO_PI * 2; a += 0.02) {
    var r = calculateSecondRadius() * cos(j * a);
    var x = r * cos(a);
    var y = r * sin(a);

    vertex(x, y);
  }
  endShape(CLOSE);
}

function calculateRadius() {
  return sin(frameCount * 0.02) * windowWidth / 2;
}

function calculateSecondRadius() {
  return cos(frameCount * 0.02) * windowWidth / 2;
}

