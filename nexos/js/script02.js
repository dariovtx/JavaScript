// Variables : calculo del precio de una cartera
let precioCosto =235;
let ganancia = precioCosto * 0.25;
let impuesto =(precioCosto + ganancia) * 0.12;
let descuento = (precioCosto + ganancia + impuesto)*0.10;
let precioFinal= precioCosto + ganancia + impuesto - descuento;
 
console.log(precioFinal);
document.write(precioFinal);
//CONSTANTES: longitud de una circunferencia
const pi =3.1415;
let radio=5;
let c =pi * radio;
console.log(c);
document.write("<br>");
document.write(c);
//área de un cilindro
let altura=15;
let area =2*pi*radio*(radio+altura);
console.log(area);
document.write("<br>");
document.write(area);