
//operador AND (&&) se evaluan ambas condiciones y se obtiene un valor de verdad
//si una de las condiciones es falsa o ambas devuelve false
//si las dos son verdaderas devuelve true
let a=5;
let valMin = 0;
let valMax = 10;

if(a>= valMin && a<=valMax){
    console.log("Dentro del rango");
}else{
    console.log("Fuera del rango");
}

// el operador OR (||) 
// devuelve true si una de las dos condiciones es verdadera

let vacaciones = false, diaDescanso = false;

if (vacaciones || diaDescanso){
    console.log("Puede asistir al juego del hijo");
}else{
    console.log("El padre está ocupado");
}
vacaciones= true;
if (vacaciones || diaDescanso){
    console.log("Puede asistir al juego del hijo");
}else{
    console.log("El padre está ocupado");
}
diaDescanso= true;

if (vacaciones || diaDescanso){
    console.log("Puede asistir al juego del hijo");
}else{
    console.log("El padre está ocupado");
}








