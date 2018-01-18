var myCanvas;
var itemListArr = [];
var spin_on = false;
var spin_speed = 0;
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
			
			spin_speed = spin_speed / 1.1;
			
			if (spin_speed < 0.002)
			{
				alert(1);
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
			arc(0, 0, 95, 95, temp, temp + rangle);
			temp = temp + rangle;
		}

	}
};

function setup(){
  myCanvas = createCanvas(200,200);
  myCanvas.parent('spin_canvas');
  frameRate(10);
  wh = new wheel();
}

function draw(){
  background(51);
  stroke(255);
  fill(122,122,122);
  translate(width/2, height/2);
  wh.update();
}