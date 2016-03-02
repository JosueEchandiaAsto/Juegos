function chocolatear()
{
    var palabras = ["ABEJA","ORNITORRINCO", "SUPERMAN", "MINECRAFT", "PERU", "LAPTOP", "TOMATE","ACCESIBIBILIDAD"]
    palabra = palabras[Math.floor(Math.random()*(palabras.length - 0))]
}
var palabra
var Imagen = function (URL)
{
    this.imagen = new Image(),
    this.imagen.src = URL,
    this.imagen.onload = add
}
function add ()
{   
    graficos.carga++; 
    if(graficos.carga==3)
        {
             graficos.dibujar()
        }
}
var Grafic = function (c)
{
    this.pista =  document.getElementById("palabra")
    this.b = document.getElementById("b")
    this.ponerpalabra = new Array()
    this.canvas=c,
    this.carga = 0,
    mar = new Imagen("mar.jpeg")
    personaje = new Imagen("personaje.png")
    tabla = new Imagen("tabla.png")
    this.coordy = [200,250,300,350,400]
    this.mono = [20,70,120,170,220,400,500]
    this.intentos = 0
    this.vida = true
}
Grafic.prototype.dibujar = function ()
{
    if(this.vida)
    {
        this.canvas.drawImage(mar.imagen,0,0)
        this.canvas.drawImage(personaje.imagen,190,this.mono[this.intentos])
        for(var i=4 ; i>=this.intentos ; i--)
            {
                this.canvas.drawImage(tabla.imagen,125,this.coordy[i])
            }
    }
}
Grafic.prototype.trazar = function ()
{
    this.intentos++;
    if (this.intentos<5) 
        {
            this.dibujar()
        };
    if(this.intentos==5)
        {   
            this.dibujar()
            alert("")
            this.intentos++
        }
    if (this.intentos==6) 
        {
            this.dibujar()
            this.pista.innerHTML = palabra
            this.vida=false
            this.dibujar()
        };
}

function inicio () 
{
    var c=document.getElementById("canvas")
    c.width=500; c.height=500;
    var canvas=c.getContext("2d")
    chocolatear()
    graficos = new Grafic(canvas)

    dibujarpista (graficos.pista, palabra)
    b.addEventListener("click",comprobar)
}
function dibujarpista(pista, palabra, encontrado)
{
    var ganaste=0
    var escribir=""
    if(encontrado != undefined)
    {
        for(p in palabra)
        {
            if (encontrado[p]==true) 
                {
                    escribir += palabra[p]
                    ganaste++
                }
            else
                {
                    escribir += " _"
                }
        }
    }
    if(escribir=="")
    {
        for(p in palabra)
        {
            escribir += " _"
        }
    }
    graficos.pista.innerHTML = escribir
    if(ganaste==palabra.length)
    {
        alert("GANASTE")
    }
}
function comprobar ()
{
    var alguno=false
    var encontrado = graficos.ponerpalabra
    var user = document.getElementById("texto")
    var usuario = user.value.toUpperCase()
    for(p in palabra)
    {
        if (usuario == palabra[p]) 
            {
                encontrado[p] = true;
                alguno = true

            };
    }
        user.value= ""
    if (alguno) 
        {
            dibujarpista(graficos.pista,palabra,encontrado)
        }
    else
        {
            graficos.trazar()
        }

}
