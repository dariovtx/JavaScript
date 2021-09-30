/**
 * *Un objeto posee propiedades y metodos
 * *A los objetos se les asigna un espacio de memoria
 * *persona guarda la referencia en memoria donde esta hubicado el objeto
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
 * *instanciar OBJETOS  
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











