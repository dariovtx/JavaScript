/**
 * * Un objeto posee propiedades y metodos
 * * A los objetos se les asigna un espacio de memoria
 * * persona guarda la referencia en memoria donde esta hubicado el objeto
 */

let persona = {
    //Atributos
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //metodos
    nombreCompleto: function(){
        return this.nombre + ' ' +this.apellido;
    }
}

console.log("Nombre: " + persona.nombre);
console.log("Apellido: " + persona.apellido);
console.log("Email: " + persona.email);
console.log("edad: " + persona.edad);
//otra forma de hacer lo mismo es tratarlo como un arrar 
//pero en vez de numeros entre los corchetes va el atributo que queremos
console.log(persona['apellido']);


//imprimir todo el objetos
console.log(persona);
//usamos el metodos se debe colocar parentecis
console.log(persona.nombreCompleto());
/**
 * * instanciar OBJETOS  
 */

let persona2 = new Object();
//le asignamos propiedades
persona2.nombre = 'carlos';
persona2.direccion = 'satur 18';
persona2.telefono = '555544444';

//acceder a los datos

console.log(persona2.telefono);


//for in para recorrer todas las propiedades del objeto

for( nombrePropiedad in persona ){
    //acceder al nombre de la propiedad
    console.log( nombrePropiedad );
    //acceder a lo que contiene
    console.log(persona[nombrePropiedad]);
}

/**
 *  * ************ AGREGAR Y ELIMINAR PROPIEDADES  ************ *
 */

let automovil ={
    marca: 'ford',
    modelo: 'fiesta',
    patente: 'A12',
    año: '2015',
   modeloMarca: function(){
       return this.modelo + ' ' + this.marca;
   } 
}
/* ---- Agregar Propiedad ---- */ 
automovil.cantidadDePuertas = '4';
/* ---- Modificamos Propiedad ---- */
automovil.cantidadDePuertas = '2';

console.log(automovil);


/* ---- Elimina la propiedad y su valor asociado ---- */
delete automovil.cantidadDePuertas;

console.log(automovil);

/**
 * * Como impromir un objeto *
 */

//Concatenando cada valor de cada propiedad
console.log( automovil.marca + ', '+ automovil.modelo );

//for in
 for (nombrePropiedad in automovil) {
     console.log( automovil[ nombrePropiedad ] );
 }

let autoArray = Object.values(automovil);
console.log(autoArray);

let autoString = JSON.stringify( automovil );
console.log( autoString );

/**
 *  * METODO GET EN OBJETOS *
 */

 let empleado = {
    //Atributos
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //Para indicar que es una propiedad y no una funcion se antepone el get
    get nombreCompleto(){
        return this.nombre + ' ' +this.apellido;
    }
}
//nos ahorramos poner () al final
console.log(empleado.nombreCompleto);

/**
 *  * METODO SET EN OBJETOS *
 */

 let cajero = {
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@mail.com',
    idioma:'es',
    edad: 28,
    get lang(){
     return this.idioma.toUpperCase();
    },
    //Metodo set se utiliza para modificar el valor de un atributo
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' +this.apellido;
    }
}

console.log( cajero.lang );

//modificamos el valor
cajero.lang = 'en';

console.log(cajero.lang);
console.log(cajero.idioma);

/**
 *  * METODO CONSTRUCTOR EN OBJETOS *
 *  *  Agregar un metodo al constructor
 */
/**
 * * los constuctores de los objetos por lo general empiezan con mayuscula
 * * La ventaja de tener el constructor es que nos facilita la reutilizacion de codigo
 * * si agregamos un metodo no es necesario ir objeto por objeto solo 
 * * modificamos el constructor y todos los objetos tendran ese mismo metodo 
 */
function Persona(nombre,apellido,email){
    //this nos permite trabajar con las propiedades del objeto en el cual se trabaja en ese momento
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan','Perez','jPerez@mail.com');
console.log( padre );

let madre= new Persona('Laura','Quintero', 'lQuintero@mail.com');
console.log( madre );


padre.nombre = 'Carlos';
console.log(padre);

//acceder a nombre completo
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());
/**
 * * Inicializar un objeto 
 */
let miObjeto = new Object();
let miObjeto2 ={};//Esta es la manera mas comun

let miCadena1 = new String();// funcion constructor de tipo string
let miCadena2 = 'Hola';//Esta forma es la mas normal y recomendable

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1= new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

/**
 * * Uso de Prototype en JavaScript
 * 
 */

 function Persona1(nombre,apellido,email){
    //this nos permite trabajar con las propiedades del objeto en el cual se trabaja en ese momento
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona1.prototype.tel='4432356';//Se le da una nueva propiedad a todos los objetos de tipo Persona1


let padre1 = new Persona1('Juan','Perez','jPerez@mail.com');
padre1.tel='1111255';//modificamos el valor
console.log( padre1.tel );

let madre1= new Persona1('Laura','Quintero', 'lQuintero@mail.com');
console.log( madre1.tel );



/**
 * * Uso del metodo call
 */

let personaa= {
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto: function(){
        return this.nombre +' '+this.apellido;
    }
}

let personaa1 ={
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(personaa.nombreCompleto());
//Si tenemos la misma estructura entre dos objetos se puede usar el metodo call
//Para mandar a llamar un metodo dentro de otro objeto y aplicarlo sobre el otro objeto
console.log(personaa.nombreCompleto.call(personaa1));

/**
 * *Paso de argumento call
 */

let trabajador = {
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto: function(titulo,tel){
        return titulo +': '+ this.nombre +' '+ this.apellido +', '+ tel;
    }
}


let trabajador1 ={
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(trabajador.nombreCompleto('Lic.','5546'));

//Podemos pasar argumentos en nuestras llamadas de la siguiente manera
console.log(trabajador.nombreCompleto.call(trabajador1, 'Ing', '345684'));

/**
 * *Metodo Apply 
 * *Su utilidad es similar a la de call
 * *existen algunas diferencias por ejemplo cuando se llaman a parametros
*/

let profesional = {
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto: function(){
        return this.nombre +' '+ this.apellido ;
        //return titulo +': '+ this.nombre +' '+ this.apellido +', '+ tel;
    },
    nombreCompleto2: function(titulo, tel){
        return titulo +': '+ this.nombre +' '+ this.apellido +', '+ tel;
    }

}


let profesional1 ={
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(profesional.nombreCompleto());

console.log(profesional.nombreCompleto.apply(profesional1));

console.log(profesional.nombreCompleto2('Lic.','5546'));
//A diferencia del call es necesario pasar un arreglo y no los parametros directamente
let arreglo =['Ing', '345684'];
console.log(profesional.nombreCompleto2.apply(profesional1,arreglo));