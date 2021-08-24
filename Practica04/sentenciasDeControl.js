//--------------- IF ----------------\\

let condicion = true;

if(condicion){
    //si es verdadera la condición se ejecuta este bloque
    console.log("Condición verdadera");
}else{
    //si es falsa la condición se ejecuta este bloque
    console.log("Condición falsa");
}

//swe puede obviar el uso de corchetes si es una sentencia de una sola linea
if(2>3)
   console.log("Condición verdadera");
else
   console.log("Condición falsa");
   
// else if se usa para hacer una corroboración extra  
let numero = 3;

if( numero == 1){
 console.log("Número uno");
}else if( numero == 2){
    console.log("Número dos");
}else if(numero == 3){
    console.log("Número tres");
}else if(numero == 4){
    console.log("Número cuatro");
}else{
    console.log("Número desconocido");
}

let mes =4;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion="verano";
}else if(mes == 3 || mes==4 || mes ==5 ){
estacion = "otoño";
}else if (mes == 6 || mes == 7 || mes== 8){
    estacion="invierno";
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "primavera";
}else{
    estacion="valor incorrecto"
}
console.log(estacion);

/*
6am-11am - Buenos Dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas Noches
0am-6am - Durmiendo
*/

let mensaje, hora=9;

if ( hora >= 6 && hora <= 11 ){
 mensaje = "Buenos Días";
}else if ( hora >= 12 && hora <= 18 ){
  mensaje = "Buenos Tardes";
}else if ( hora >= 19 && hora <= 24 ){
    mensaje = "Buenas noches";
}else if (hora >= 0 && hora < 6 ){
    mensaje = "Durmiendo";
}else{
    mensaje = "Error";
}

console.log(mensaje);


























