var myCanvas;
var itemListArr = [];
var spin_on = false;
var spin_speed = 0;
var spin_ratio = 0;
var rotangle = 0;
var wh;

function wheel()
{
	this.itemnumber = 0;
	this.start = 0;
	
	this.update = function(){
		this.itemnumber = itemListArr.length;
		var angle = 360 / this.itemnumber ;
		var temp = 0;
		
		if (spin_on == true)
		{
			rotangle = rotangle + spin_speed;
			var rotangle_deg = degrees(rotangle) % 360;
			rotangle = radians(rotangle_deg);
			
			spin_speed = spin_speed / spin_ratio;
			
			if (spin_speed < 0.002)
			{
				spin_on = false;
				spin_speed = 0;
				spinStop();
			}
		}
		rotate(rotangle);

		for(var i = 0; i < itemListArr.length; i ++)
		{
			var rangle = radians(angle);

			fill(itemListArr[i][1],itemListArr[i][2],itemListArr[i][3]);
			arc(0, 0, 150, 150, temp, temp + rangle);
			fill(255);
			noStroke();
			push();
				rotate(temp + (rangle / 2));
				text(itemListArr[i][0], 25, 5);
			pop();
			stroke(255);
			temp = temp + rangle;
		}

	}
};

function setup(){
  myCanvas = createCanvas(200,200);
  myCanvas.parent('spin_canvas');
  frameRate(60);
  wh = new wheel();
}

function draw(){
  background(51);
  stroke(255);

  fill(122,122,122);
  translate(width/2, height/2);
  rotate(radians(180));
  push();
   rotate(radians(180));
  wh.update();
  pop();

  fill(0,0,0);
  triangle(-70,0, -75,-2,-75,2);
}

