var img;
var type="soganguniversityart&technologycreationbeyondimagination";
function preload()
{
	img=loadImage("picture.jpg");
}

function setup() { 
  createCanvas(img.width,img.height);
	img.loadPixels();
	noStroke();
	noloop();
} 

function draw() { 
  background(255);
	var tid=0;
	for(var i=0;i<img.width;i++)
	{
		for(var j=0;j<img.height;j++)
		{
			tid=i+img.width*j;
			var id=tid*4;
			var R=img.pixels[id];
			var G=img.pixels[id+1];
			var B=img.pixels[id+2];
			var c=color(R,G,B);
			var grey=round(R*0.222+G*0.707+B*0.071);
			var w;
			w=map(grey,0,255,3,1);
			fill(c);
			textSize(w);
			text(type[tid%type.length],i,j);
			console.log(type[tid%type.length]);
		}
	}
}
