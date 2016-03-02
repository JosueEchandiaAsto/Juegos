function inicio ()
{
	canvas=document.getElementById("canvas")
	lienzo=canvas.getContext("2d")
	dibujar(lienzo);
}

function dibujar(l)
{
	var interlinea=30;
	var numlineas=(300/interlinea)
	color=["#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#FFA500","#FF0000"]
	color2=["#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#ADFF2F","FFFF00","#FFA500","#FF0000","#FFA500","#FF0000","#ADFF2F","FFFF00"]
	for (var i = 0; i <=numlineas ; i++) 
	{
		l.strokeStyle=color[i]
		var num=interlinea*i
		l.beginPath()
		l.moveTo(0,num)
		l.lineTo(num,0)
		l.stroke();
		l.closePath();
		l.beginPath()
		l.moveTo(num,300)
		l.lineTo(300,num)
		l.stroke();
		l.closePath();
	};
	for (var i = 0; i <=numlineas ; i++) 
	{	l.strokeStyle=color[i]
		var num=interlinea*i
		l.beginPath()
		l.moveTo(300,num)
		l.lineTo(300-num,0)
		l.stroke();
		l.closePath();
		l.beginPath()
		l.moveTo(num,300)
		l.lineTo(0,300-num)
		l.stroke();
		l.closePath();
	};
}