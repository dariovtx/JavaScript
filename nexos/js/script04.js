// Condicional IF

let numero1=23;
let numero2= 63;

document.write("Para el IF");
document.write("<br>");
if (numero1==numero2){
    document.write("Los dos numeros son iguales");
}else if(numero1>numero2){
    document.write("El primer numero es mayor que el segundo");    
}else{
    document.write("El numero es menor que el segundo");
}
document.write("<br>");

// Ciclo For

document.write("Para el For");
document.write("<br>");
for(x =1 ; x <10 ;x++){
    document.write("El numero es " + x + "<br>");
}
document.write("<br>");
//Ciclo While
document.write("Para el While");
document.write("<br>");
let y=1;
while(y<10){
    document.write("El número es: " + y + "<br>");
y++;
}
document.write("While con contador");
document.write("<br>");
let contador =0;
while(contador<10){
    document.write("La variable contador es igual a: " + contador +"<br>");
contador++;
}
console.log("Final del programa");
//Sentencia swithch
//Busqueda día de la semana

switch (new Date().getDay()){
    case 0:
        dia="Domingo";
        break;
    case 1:
        dia="Lunes";
        break;
    case 2:
        dia="Martes";
        break;
    case 3:
        dia="Miercoles";
        break;
    case 4:
        dia="Jueves";
        break;
    case 5:
        dia="Viernes";
        break;
    case 6:
        dia="Sabado";
        break;
}
document.write(dia);
// new date() sirve para saber hora dia minutos milisegundos entre otros.
document.write("<br>");
let edad;
edad= prompt("Por favor instroduce edad: ");
if (edad==""){alert ("No has introducido edad");}
    edad=Number(edad);//Con esto se ve si es un numero
switch (edad) {
    case 0: alert ("Acaba de nacer hace poco. No ha cumplido el año");break;
    case 18:alert("Está justo en la mayoria de edad");break;
    case 65: alert("Está en la edad de jubilación"); break;
    default: alert("La edad no es critica");
}
