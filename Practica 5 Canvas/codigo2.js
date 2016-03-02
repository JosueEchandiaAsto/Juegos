function inicio ()
{
	canvas=document.getElementById("canvas")
	lienzo=canvas.getContext("2d")
	dibujar(lienzo);
}

function dibujar(l)
{
	var interlinea=30;
	var numlineas=(600/interlinea)
	for (var i = 0; i <=numlineas ; i++) 
	{
		var num=(interlinea*i)/2

		l.beginPath();
		l.strokeStyle = "#9370DB";
		l.moveTo(100,100);
		l.lineTo(num,0)
		l.stroke();
		l.closePath(); 

		l.beginPath()
		l.moveTo(100,100)
		l.lineTo(0,num)
		l.stroke();
		l.closePath();

		l.beginPath()
		l.moveTo(200,200)
		l.lineTo(300,num)
		l.stroke();
		l.closePath();

		l.beginPath()
		l.moveTo(200,200)
		l.lineTo(num,300)
		l.stroke();
		l.closePath();

		var nume=(interlinea*i)/3
		l.beginPath()
		l.strokeStyle = "#9400D3";
		l.moveTo(0,300)
		l.lineTo(nume,nume)
		l.stroke()
		l.closePath()

		l.beginPath()
		l.moveTo(300,0)
		l.lineTo(nume,nume)
		l.stroke()
		l.closePath()

		l.beginPath()
		l.moveTo(0,300)
		l.lineTo(105+nume,105+nume)
		l.stroke()
		l.closePath()

		l.beginPath()
		l.moveTo(300,0)
		l.lineTo(105+nume,105+nume)
		l.stroke()
		l.closePath()
	};
	for (var i=0;i<35;i++)
	{
		l.beginPath()
		l.strokeStyle = "#BA55D3";
		l.arc(150,150,69-(i*2),Math.PI*2,false)
		l.stroke()
		l.closePath()
	}
}