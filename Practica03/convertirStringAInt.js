let miNumero = "10";

//console.log(typeof miNumero);
//convertimos usando la funcion Number
let edad = Number(miNumero);

console.log(typeof edad);
//operador ternario
console.log((edad >= 18 ? "Puede votar" : "No puede votar" ));

edad=18;
//if 
if(edad >= 18){
    console.log("Puede votar");
}else {
    console.log( "No puede votar" );
}