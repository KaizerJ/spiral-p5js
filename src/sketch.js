var d, a1, a2, a3, a4, i;

function setup() {
  createCanvas(400, 400);
  a1 = 0;
  d = 150;
  a2 = 90;
  a3 = 180;
  a4 = 270;
  i = -1;
  background(0);
}


function draw() {
  translate(width / 2, height / 2);

  if (d < 0 || d > 250) {
    //background((a1 + a2 + a3 + a4) % 255);
    background(color(a1 % 255, a2 % 255, a3 % 255))
    i = -i;
  }

  d += i;
  a1 += 10;
  a2 += 10;
  a3 += 10;
  a4 += 10;
  fill(color(255 * random(), 255 * random(), 255 * random()));
  circle(d * cos(radians(a1)), d * sin(radians(a1)), 20);

  fill(color(255 * random(), 255 * random(), 255 * random()));
  circle(d * cos(radians(a2)), d * sin(radians(a2)), 20);

  fill(color(255 * random(), 255 * random(), 255 * random()));
  circle(d * cos(radians(a3)), d * sin(radians(a3)), 20);

  fill(color(255 * random(), 255 * random(), 255 * random()));
  circle(d * cos(radians(a4)), d * sin(radians(a4)), 20);
}