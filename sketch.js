let x = 0;

function setup() {
  createCanvas(400,400);
}
function draw() {
  background(220);
  
  if(mouseX > width / 2) {
    fill(255, 0, 255);
  } else {
    fill(0, 0, 255);
  }

triangle(x, x, 10, 100, x, 50);
  
   x = x + 3;
  
   if(x > width){
     x=0
   }
  }
