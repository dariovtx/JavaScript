let numero=5;
let numeroTexto = 'Valor desconocido';

switch(numero){
    case 1:
        numeroTexto ='Número uno';
        break;
    case 2: 
    numeroTexto ='Número dos';
        break;
    case 3: 
        numeroTexto ='Número tres';
    break;
    case 4: 
        numeroTexto ='Número cuatro';
    break;
    default:
        numeroTexto = 'Caso no encontrado';

}
console.log(numeroTexto);
numero = 1;
switch(numero){
    case 1:
        numeroTexto ='Número uno';     
    case 2: 
        numeroTexto ='Número dos';
        break;
    case 3: 
        numeroTexto ='Número tres';
    break;
    case 4: 
        numeroTexto ='Número cuatro';
    break;
    default:
        numeroTexto = 'Caso no encontrado';

}
//en el caso de no encontrar un break ejecuta todos los casos hasta encontrar el final
//o encontrar un break
console.log(numeroTexto);

/* Estaciones del año */
let mes=4;
let estacion = 'Estación desconocida';
//switch usa la comparación estricta (===)
//si mes= '11'; estacion sera igual a 'Valor Incorrecto'

switch( mes ){
    case 12: case 1: case 2: 
        estacion ='Verano';
    break;
    case 3: case 4: case 5:
        estacion ='Otoño';
    break;
    case 6: case 7: case 8:
        estacion ='Invierno';
    break; 
    case 9: case 10: case 11:
        estacion ='Primavera';
    break; 
    default:
        estacion = 'Valor Incorrecto';
}
console.log(estacion);















