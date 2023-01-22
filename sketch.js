let step = 5;
let color1 = 255;
let color2 = 120;
let color3 = 255;

function setup() {
  createCanvas(400, 400);
  randomArray = [];
  randomY = [];
  rainLen = [];
  for (var i = 0; i < 100; i++) {
    randomArray[i] = random(0, width);
    randomY[i] = random(-1000, -200);
    rainLen[i] = random(6,15);
  }
}

function draw() {
  background(0);
  //COLOR1
  color1-=20;
  if (color1 < 10) {
    color1 = 255;
  }
  //COLOR2
  color2-=15;
  if (color2 < 10) {
    color2 = 255;
  }
  //COLOR2
  color2-=17;
  if (color2 < 10) {
    color2 = 255;
  }
  
  stroke(color1,color2,color3);
  strokeWeight(2);
  for (var i = 0; i < 100; i++) {
    randomY[i] = randomY[i] + step;
    if (randomY[i] > 400) {
      randomY[i] = 0;
    }
    step = random(4,15);
    line(randomArray[i], randomY[i], randomArray[i], randomY[i]+rainLen[i]);
  }
}