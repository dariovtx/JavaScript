//------------------ inicializar un arreglo ------------------\\
//metodo antiguo de declarar un array
//inicializamos una objeto de tipo array
let autos2 = new Array('BMW','Mercedes Benz','volvo');
console.log(autos2);
//en este caso si queremos que la los datos no cambien
// autos guarda la referencia en memoria donde se guarda la información que necestamos
const autos = ['BMW','Mercedes Benz','volvo'];
console.log(autos);

/*------------------ *Acceder a los datos de un arreglo ------------------*\
/* 
    *Para acceder a un elemento del arreglo se necesita un índice.
    *Ese índice nos muestra el valor que tenemos guardado en cada posición del arreglo.
    *Los índices en los arreglos empiezan a contar desde el 0 y en el caso de  
    *tener 10 posiciones se contara desde 0 a 9.
*/

//Primer elemento
console.log( autos[0] );
//Segudon elemento
console.log( autos[1] );
//tercer elemento
console.log( autos[2] );

//autos.length nos da el tamaño del arreglo
for( let i = 0; i < autos.length ; i++ ){ //Por convención se utiliza a i como índice para acceder a los elementos de un arreglo
     console.log( i + ': ' + autos[i] );
}

//------------------ Modificar un valor------------------\\

autos[1] = 'MercedesBenz';
console.log(autos);

//------------------ Agregar un valor------------------\\
//Metodo push se utiliza para agregar un nuevo elemento al final del arreglos
autos.push('Audi');
console.log(autos);

//unshift Este metodo agrega al principio
autos.unshift('Ford');
console.log(autos);

//Otras formas con las cuales hay que tener cuidado
//con el ultimo tamaño del arreglo ya que nos devuelve 5 
//y el array cuenta hasta 4 estaríamos en la posición 5 para agregar un nuevo elemento
console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos);

//Tambien se puede dejar huecos vacios en nuestro arreglo (Esto no es recomendado)
autos[autos.length+1]='Porshe';
console.log(autos);

//------------------ Preguntar si es un Array ------------------\\
//typeof no nos sirve porque nos dice que es un objeto
console.log( typeof autos );

//si usamos la clase array  nos devuelve True
console.log( Array.isArray( autos ) );

//Preguntamos si es una instacia de Array y nos devuelve True
console.log( autos instanceof Array );