//Genera un número aleatorio entre un rango de enteros
function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
//Variables
var piedra=0; papel=1; tijera=2; lagarto=3; spock=4;
var opciones=["Piedra","Papel","Tijera","Lagarto","Spock"];

function inicio()
{
pi=document.getElementById("botonpiedra");
pa=document.getElementById("botonpapel");
ti=document.getElementById("botontijera");
la=document.getElementById("botonlagarto");
sp=document.getElementById("botonspock");
pi.addEventListener("click", botonpi);
pa.addEventListener("click", botonpa);
ti.addEventListener("click", botonti);
la.addEventListener("click", botonla);
sp.addEventListener("click", botonsp);
}

function botonpi ()
{valor=0; identificar(valor)}
function botonpa ()
{valor=1; identificar(valor)}
function botonti ()
{valor=2; identificar(valor)}
function botonla ()
{valor=3; identificar(valor)}
function botonsp ()
{valor=4; identificar(valor)}

function identificar(v)
{	var opcionMaquina=patito(0,4);
	resultado111.textContent=opciones[v]+" VS "+opciones[opcionMaquina];
	resultado(v,opcionMaquina); }
function resultado(n1,n2)
{	if(n1==n2)
	{ titulo.textContent="Empate" }
	else
	{	if (  (n1==piedra &&n2==lagarto)||(n1==piedra &&n2==tijera)
		||(n1==papel  &&n2==spock)||(n1==papel  &&n2==piedra)
		||(n1==tijera &&n2==papel)||(n1==tijera &&n2==lagarto)
		||(n1==lagarto&&n2==spock)||(n1==lagarto&&n2==papel)
		||(n1==spock  &&n2==piedra)||(n1==spock  &&n2==tijera))
		{titulo.textContent="Ganaste"}
		else 
		{titulo.textContent="Perdiste"} }; 
}
