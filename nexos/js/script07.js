// OBJETOS

/*
class Alumno {
    constructor(nombre,apellido,pais){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais; // this es una palabra que hace referencia a la instancia
    }

bienvenidos (){
    return`saludos a todos, soy ${this.nombre} ${this.apellido}, y mi pais de origen es ${this.pais}`;
}}
let juan =new Alumno("Juan","Garcia","Venezuela");
let pedro = new Alumno ("Pedro", "Alonzo", "Ecuador");
document.write(pedro.bienvenidos());
document.write("</br>" + "</br>");
document.write(juan.bienvenidos());

// Hasta acá pag 107 del codigo y 37 explicación
//40 pag

document.write("</br>" + "</br>");
let cad ="Estudio en Aprender21",i;
let ja=new Array();
ja =cad.split("o");
with(document) { write("la cadena es: "+ cad + "</br>");
write("longitud de la cadena es: "+ cad.length + "</br>")
write("haciendola ancla: "+ cad.anchor("b") + "</br>")
write("En grande: "+ cad.big() + "</br>");
write("Parpadea: "+ cad.blink() + "</br>");
write("Caracter 8 es: "+ cad.charAt(8) + "</br>");
}

// String 

let mitexto = "Esta es un texto";
let pos = mitexto.indexOf("un");
document.write(pos);

// Metodos
document.write("</br>" + "</br>");
let texto="Estudio en Aprender21";
let nuevoTexto = new Array();
nuevoTexto = texto.split("o"); //split=separar
with(document) {
write("la cadena es: "+ texto + "</br>");
write("longitud de la cadena es: "+ texto.length + "</br>")
write("haciendola ancla: "+ texto.anchor("b") + "</br>")
write("En grande: "+ texto.big() + "</br>");
write("Parpadea: "+ texto.blink() + "</br>");
write("Caracter 8 es: "+ texto.charAt(8) + "</br>");
// <blink>Estudio en Aprender21</blink> en html
write("Todo en minuscula: "+ texto.toLowerCase() + "</br>");
write("Todo en mayuscula: "+ texto.toUpperCase() + "</br>");
}

//Array pag41

document.write("</br>" + "</br>");
let palabras=new Array("Palabra","Letra","Amor","Color","Cariño");
with(document) {
    write("Antes de ordenar: "+palabras.join(",")+"<P>");
    write("Ordenados: "+ palabras.sort()+"<P>");
    write("Ordenados en orden inverso: "+palabras.reverse());
}
document.write("</br>" + "</br>");
let lista = new Array(30);
tamanio =lista.length; //*tamanio almacenaria el valor 30
document.write(tamanio);
document.write("</br>" + "</br>");
Array.prototype.detalle =null; //detalle, se define y se agrega como propiedad al Array
dias=new Array("lunes","martes","miercoles","jueves","viernes","sabado","domingo");
dias.detalle="Dias laborales de la semana: ";
document.write(dias.detalle,dias);


//Math pag42


document.write("</br>" + "</br>");
with(document) {
    write("Valor absoluto del numero -45: "+Math.abs(-45)  );
    write("</br>");
    write("Valor del coseno de 2pi: "+Math.cos(2*Math.PI));
    write("</br>");
    write("Valor del seno de 2pi: "+Math.sin(2*Math.PI));
    write("</br>");
    write("Valor de 4.33 redondeado para arriba: "+Math.ceil(4.33));
    write("</br>");
    write("Valor de 4.75 redondeado(truncar): "+Math.floor(4.75));
    write("</br>");
    write("Valor maximo de un grupo de valores: " +Math.max(12,5,8,16,4,15));
    write("</br>");
    write("Valor manimo de un grupo de valores: " +Math.min(12,5,8,16,4,15));
    write("</br>");
    write("Elegir valores aleatoreos entre 0 y 25: " + Math.floor(Math.random()*25));
}

// Date (pag44 y 45, teoria)(practica 107)


with(document) {
    write("</br>" + "</br>");
    write("Fecha del día en hoy: "+new Date()+"<br>");
    write("Fecha de un día determinado formato 'december 25 1960': "+new Date("December 25 1960")+"<br>");
    write("Fecha de un día determinado formato '10 Nov 1990': "+new Date("10 Nov 1990")+"<br>");
    write("Fecha de un día determinado formato '10/02/2000': "+new Date("10/02/2000")+"<br>");
    write("Fecha de un día determinado formato '1990, 11, 10, 20,00': "+new Date(1990, 11, 10, 20, 00)+"<br>");
        
    write("</br>" + "</br>");
    
    let fecha=new Date();
    write("hoy es: "+fecha.getDate()+"/");
    write(fecha.getMonth()+"/");
    write(fecha.getFullYear()+"<br>");
    write("Numero dia de la semana: "+fecha.getDay()+"<br>");
    
    write("</br>" + "</br>");

    let fecha2=new Date();
    let diaSemana=new Array("domingo","lunes","martes","miercoles","jueves","viernes","sabado");
    let dia=fecha2.getDay();
    write("Hoy es "+ diaSemana[dia]+"<br>");
    write("El año acual es: "+fecha2.getFullYear()+"<br>");
    write("Son las: "+fecha2.getHours()+"horas.<br>");
    
    write("</br>" + "</br>");

    let fecha3=new Date();
    write("Son las: "+fecha3.getHours());
    write(";"+fecha3.getSeconds());
    write(";"+fecha3.getMilliseconds()+"<br>");
    write("Este mes es el: "+fecha.getMonth());
}   


// Relojes, contadores e intervalos de tiempo (Teoria 46 a 49) (Practica 108 y 109) 


let fechaHora=new Date();
document.getElementById("reloj").innerHTML=fechaHora;

let fechaHora2=new Date();
let horas= fechaHora2.getHours();
document.write(horas);
let minutos=fechaHora2.getMinutes();
document.write(minutos);
let segundos=fechaHora2.getSeconds();
document.getElementById("reloj").innerHTML="La hora actual es: "+horas+":"+minutos+":"+segundos;


function muestraReloj(){
let fechaHora =new Date();
let horas = fechaHora.getHours();
let minutos= fechaHora.getMinutes();
let segundos = fechaHora.getSeconds();
if(horas<10){horas="0"+horas;}
if(minutos<10){minutos="0"+minutos;}
if(segundos<10){segundos="0"+segundos;}
document.getElementById("reloj").innerHTML=horas+":"+minutos+":"+segundos;
setTimeout(muestraReloj,1000);
}
window.onload=function(){
    setInterval(this.muestraReloj,1000);
}


//Bolean (pag49 y 50, teoria)(practica 108)


with(document) {
    write("</br>" + "</br>");
    let b1= new Boolean();
    write(b1+"<br>");
    let b2=new Boolean("");
    write(b2+"<br>");
    let b25= new Boolean(false);
    write(b25+"<br>");
    let b3= new Boolean(0);
    write(b3+"<br>");
    let b35= new Boolean("0");
    write(b35+"<br>");
    let b4= new Boolean(3);
    write(b4+"<br>");
    let b5= new Boolean("hola");
    write(b5+"<br>");
}

function valor(){
    return this.valueOf()?"verdaderamente correcto":"verdaderamente errado";
}

Boolean.prototype.valor=valor;
let item=new Boolean(false);
document.write(item.valor());
*/


//NUMBERS


with(document){
    let n1= new Number();
    write("muestra un valor: "+n1+"<br>");
    let n2= new Number("hola");
    write("muestra: "+n2+"<br>");
    let n3= new Number("123");
    write("muestra el valor: "+n3+"<br>");
    let n4= new Number("123asfddfg");
    write("muestra: "+n4+"<br>");
    let n5= new Number(123456);
    write("muestra el valor: "+n5+"<br>");
    let n6= new Number(false);
    write("muestra el valor: "+n6+"<br>");  
    let n7= new Number(true);
    write("muestra el valor: "+n7+"<br>");
    write("</br>" + "</br>");
    write("Propiedad NaN: " +Number.NaN+ "</br>");
    write("Propiedad MAX_VALUE: " +Number.MAX_VALUE+ "</br>");
    write("Propiedad MIN_VALUE: " +Number.MIN_VALUE+ "</br>");
    write("Propiedad NEGATIVE_INFINITY: " +Number.NEGATIVE_INFINITY+ "</br>");
    write("Propiedad POSITIVE_INFINITY: " +Number.POSITIVE_INFINITY+ "</br>");
}



