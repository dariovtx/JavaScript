
/*Tipos de datos En JS */

//tipo de dato String
var nombre = "Darío";
console.log(nombre);

//tipo de dato Numerico
var numero = 1000;
console.log(numero);

//tipo de dato Object

var objeto ={
    nombre : "juan",
    apellido : "perez",
    telefono : "34243324"
}
console.log(objeto);

//Variables dinamicas cambian su tipo de dato
//para javaScipt los enteros y 
//los reales son de tipo numerico por eso si usamos tupeof nombre es de tipo numerico
//typeof nos da el tipo de una variable
console.log(typeof nombre);
nombre = 10;
console.log(typeof nombre);
nombre=10.5;
console.log(typeof nombre);
console.log(typeof objeto);

//Tipo de dato boolean.
var bandera = true;
console.log(bandera);
console.log(typeof bandera);
var bandera =false;
console.log(typeof bandera);

/*
 Una función tambien es un tipo de dato.
*/
//tipo de dato function

function miFuncion(){
   //codigo
}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato symbol
//se utiliza para crear un valor unico de una variable
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo de dato Class
//las clases tambien son funciones
class Persona{
    constructor(nombre, apellido){
        //El constructor nos permite inicializar a la clase Persona
        this.nombre = nombre;
        this.apellido= apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
//es por defecto cuando no inicializamos una variable
//se puede utilizar como un valor
var x;
console.log(x);
console.log(typeof x);
x=undefined;
console.log(x);
console.log(typeof x);
//null = ausencia de valor
//null es de typo object
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato Array el cual es Object

var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//la cadenas vacias no es un dato en si mismo pero es de tipo de dato String.
var z= '';
console.log(z);
console.log(typeof z);

