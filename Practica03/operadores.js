let a, b, c, d;
a=3, b = 2, c = 1, d=4;
let z = a + b;


//------------------ Operaciones Basicas ------------------\\

console.log("Resultado de la suma: "+ z);

z = a - b;
console.log("resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a/ b;
console.log("Restultado de la división: " + z);

z = a % b;
console.log("Operacion modulo: " + z);

z = a** b;
console.log("El operador exponente : " + z);

//------------------ incremento ------------------\\

//pre-incremento (el operador ++ antes de la variable)
//primero se suma +1 a A y luego se lo asigna a Z
z = ++a;
console.log( a );
console.log( z );

//post-incremento (el operador ++ despues de la variable)
//primero se realiza la asignacion y luego se suma +1 a b
z = b++;
console.log( b );
console.log( z );

//------------------ Decremento ------------------\\

//pre-decremento
//primero se resta -1 a A y luego se lo asigna a Z
z = --a;
console.log( a );
console.log( z );

//post-decremento
//primero se realiza la asignacion y luego se resta -1 a b
z = b--;
console.log( b );
console.log( z );

//------------------ Precedencia ------------------\\

//realiza las operaciones de izquierda a derecha 
//Primero se realiza la multiplicacion luego la suma por no importa el orden
//por precedencia de operadores
z = a * b + c;
console.log( z );

z = c + a * b;
console.log( z );

//primero la multiplicación luego la división despues la suma
z = a * b + c/d;
console.log( z );

//primero la multiplicación luego la división y despues la suma 
//(porque va de isquierda a derecha cuando las precedencias son igual de importantes)
z = c + a * b/d;
console.log( z );

//primero se resuelve lo del parentecis luego la multiplicación luego la división
z = (c + a) * b / c;
console.log( z );

//------------------ Asignación ------------------\\

//Esta es la forma basica de asignación
let numero = 1;

//Asignación con incremento
numero+=3; //es equivalente a numero= numero +3;
console.log(numero);
// Decremento

numero-= 2; //numero= numero-2;
console.log(numero);

/*
Otros operadores
*=,/=,%=.
*/


//------------------ Comparación ------------------\\

let x = "3";
//se revisa el valor sin importar el tipo
z = (a==b);
console.log(z);
z = (a==x);
console.log(z);

//estrictamente igual revisa los valores iguales y tambien los tipos
z = (a===x);
console.log(z);

//ver si son distintos
//sin importar el tipos
z = (a!=x);
console.log(z);

//revisa los tipos
z = (a!==x);
console.log(z);

//OPERADORES RELACIONALES

z = a<b;
console.log(z);

z = a<=b;
console.log(z);


z = a<=3;
console.log(z);

z = a >=3;
console.log(z);








