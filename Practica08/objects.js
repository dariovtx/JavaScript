/**
 * *Un objeto posee propiedades y metodos
 * *A los objetos se les asigna un espacio de memoria
 * *persona guarda la referencia a donde esta hubicado el objeto
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









