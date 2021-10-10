class Persona{
    //atributo de clase
    static contadorPersona = 0;
    //variable de tipo estatico y constante
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
       if(Persona.contadorPersona <Persona.MAX_OBJ){
        //como this apunta a un objeto no nos sirve para un atributo statico
       this.idPersona = ++Persona.contadorPersona ;//cada vez que se llame a este constructor se incrementa este contador
        console.log('Se incrementa contador a '+ Persona.contadorPersona);
       }else{
           console.log("Se han superado el maximo de objetos permitidos");

       }
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
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

let persona1 = new Persona('Juan','Perez');
console.log(persona1.toString());
console.log(Persona.contadorPersona);

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1.toString());
console.log(Persona.contadorPersona);

let persona2 = new Persona('Karla','Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=10;//no logra modificarlo porque no tenemos metodo set
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano','Lara');
let persona4= new Persona('Armando','toledo');
let persona5 = new Persona('Laura','Quintero');
console.log(persona3.toString());
console.log(persona4.toString());
//Vemos que no tiene definido ID
console.log(persona5.toString());


