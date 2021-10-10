/**
 * * Las clases empiezan con la primera letra en mayuscula
 * * Hoisting y Clases
 * * Cuando trabajamos con clases no aplica el concepto de Hoisting
 * * Esto significa que primero debemos definir la clase para poder usarla
 * * pero si de funciones y variables se traba si podemos usarlas antes de definirlas
 */
//Inicio del mal uso de una clase
 //let persona2 = new Persona('Karla','Juarez');
//Fin del mal uso de una clase

class Persona{
    //atributo de clase
    static contadorPersona=0;
    //atributo de objeto
   email = 'Valor defaul email';
    //Todas las clases tienen CONSTRUCTOR
    //Las clases poseen atributos y metodos
    constructor(nombre,apellido){
        //creamos una nueva propiedad y se le asigna a la clase persona
        //inicializamos 
        this._nombre = nombre;
        this._apellido = apellido;
        //como this apunta a un objeto no nos sirve para un atributo statico
        Persona.contadorPersona++;//cada vez que se llame a este constructor se incrementa este contador
        console.log('Se incrementa contador a '+Persona.contadorPersona);
    }
    get nombre(){
        return this._nombre;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido( apellido ){
        this._apellido = apellido;
    }
    //dentro de una clase no es necesario ni comas ni la palafra funtion para definir metodos
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribimos el metodo de Object toString()
    toString(){
        //Polimorfismo
        return this.nombreCompleto();
    }

    //Metodos estaticos

    static saludar(){
        console.log("Saludos desde un metodo Estatico.");
    }
    //Con objetos como parametro
    static saludar2(persona){
        console.log(persona.nombre + ' '+ this._apellido);
    }


}
/*
//Creamos un objetos/instancia
//con new reservamos memoria para guardar nuestro objeto
let persona1 = new Persona('Juan','Perez');
console.log(persona1);

let persona2 = new Persona('Carlos','Lara');
console.log(persona2);
*/

let persona1 = new Persona('Juan','Perez');
//no necesita parentecis porque Js entiende que llamamos a un metodo get
console.log(persona1.nombre);

persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);

/**
 * * Herencia
 * * Con extends señalamos la clase de cual heredamos
 * * se heredan atributos y metodos tambien se puede decir que se heredan los comportamientos de la clase padre
 * * en este caso Empleado es hijo de persona
 * * Todas las clases heredan de Object aun que no se como extends Object, JS lo tiene implicito
 */

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//Llamamos al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;

    }
    set departamento( departamento ){
        this._departamento=departamento;
    }
    //Sobeescritura de Metodos
    nombreCompleto(){
      //Podemos usar los atributos de la clase padre 
      //Usamos super para acceder a nombreCompleto()
        return super.nombreCompleto()+ ' ' + this.departamento;
    }
}

let empleado1 = new Empleado('Juan','Perez','Sistemas');

console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.apellido);
console.log(empleado1.departamento);
//En este caso como no es get o set se pone parentecis
console.log(empleado1.nombreCompleto());
/**
 * * Por polimorfismo: si estamos trabajando con el metodo de la clase hija y llamamos un metodo de la clase padre que a su vez llama a un metodo 
 * * entonces buscara el metodo mas inmediato o mas cercano. En este caso como lo tenemos definido en empleado al metodo nombreCompleto
 * * lo buscará ahí mismo y no en la clase padre. 
 * */
//Se llama a nombreCompleto de la clase Empleado
console.log(empleado1.toString());

//Se llama a nombreCompleto de la clase Persona
console.log(persona1.toString());
//Mal uso de metodos estaticos
//persona1.saludar();
//Aun que este definido dentro de la clase los objetos no tienen acceso a ella

//Si podemos usarlo desde la clases
Persona.saludar();

Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//los atributos estaticos funcionan de igualmanera que los metodos estaticos

console.log(persona1.contadorPersona);
//nos devuelve dos porque tenemos dos objetos creados
console.log(Persona.contadorPersona);

console.log(Empleado.contadorPersona);

//atributos no estaticos
console.log(persona1.email);
console.log(empleado1.email);
//si lo accedemos desde una clase nos da indefinido
console.log(Persona.email);
console.log(Empleado.email);






