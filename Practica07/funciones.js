
//Se puede llamar antes de declarar la función (HOISTING)
miFuncion(10,5);

//Declaración de una función
function miFuncion(a, b){//bloque de una función
    console.log("Suma: " + ( a + b ) );
}
//Llamada a función
miFuncion(15,5);

//---------- RETURN -----------\\

function miFuncion2(a, b){//bloque de una función
    //devuelve la cantidad de argumentos
    console.log(arguments.length);
   return ( a + b ) ;//retorna un valor
}
//Llamada a función
let resultado = miFuncion2(15,5);
console.log(resultado);

//-------- FUNCIONES DE TIPO EXPRESIÓN O DE TIPO ANÓNIMA --------\\
//declaración
let sumar = function(a, b){return a + b;};

//llamada a function
let resultado1= sumar(1,2);

console.log(resultado1);

//-------- llamada a función a si misma --------\\
//no es reutilizable
(function(){
    console.log('Ejecutando la función');
})();

(function(a, b){
    console.log('Ejecutando la función ' + (a+b));
})(3, 4);

//-------- funciones como objetos ----------\\
//me devuelve que es una función pero tambien son objetos
console.log(typeof miFuncion2 );
//Tienen propiedades y metodos
var miFuncionTexto = miFuncion2.toString();
console.log(miFuncionTexto);

//-------- Funciones tipo flecha -------\\
//comparamos
let restar = function(a, b){return a - b;};

//llamada a function
let resultado3= restar(1,2);

console.log(resultado1);
// ya no aparece function y en vez de corchetes se pone el operador flecha => para restornar un valor
const restarFuncionTipoFlecha = (a, b) => a - b;

resultado=restarFuncionTipoFlecha(5,3);
console.log(resultado);

//---------- Argumentos y parametros -------\\
/*
 *Se conoce como parametros a la lista de valores que recibe una función
 *Los argumentos son los valores que le pasamos a la funcion 
 *Ejemplo : function suma (a,b) tiene como parametros a "a" y a "b"
 *cuando llamamos a la funcion: suma(5,3); sus argumentos son 5 y 3
 */











