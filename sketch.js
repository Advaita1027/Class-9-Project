
function setup() {
  createCanvas(1400,1400);
}

function draw() 
{
  background("lightblue");

  if(keyIsDown(DOWN_ARROW)) {

    background("purple");
  }

  if(keyIsDown(UP_ARROW)) {

    background("orange");
  }

  if(keyIsDown(LEFT_ARROW)) {

    background("yellow");
  }

  if(keyIsDown(RIGHT_ARROW)) {

    background("red");
  }

}




