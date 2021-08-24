var nombre = 'Juan';
var apellido ='Perez';
// +  se usa para concatenar cadenas 
//si fueran numeros los sumaria
var nombreCompleto = nombre +' '+ apellido;
console.log(nombreCompleto);

var nombreCompleto2= 'Carlos'+ ' ' + 'Lara';
console.log(nombreCompleto2);

//las expresiones en Js se evaluan de izquierda a derecha
// si encuentra primero un String y luego hay un numero lo toma como String
var x = nombre + 219;
console.log(x);

//si encuentra un numero primero lo toma como numero y luego a lo que sigue como string
x = 2 + 4 + nombre;
console.log(x);

x = nombre + 2 + 4 ;
console.log(x);

//si pongo paréntesis prioriza el paréntesis
x = nombre + (2 + 4 );
console.log(x);

