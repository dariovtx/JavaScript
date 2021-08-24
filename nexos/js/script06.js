//FUNCIONES (PAG 105)
//Function Declaration

function sumaValores(num1,num2,num3){
    let resultado=num1+num2 + num3;
    document.write(resultado);
}
sumaValores(1,2,3);
document.write("</br>" + "</br>");
function concatenado (nombre, edad,curso){
    let cursado="Nombre del alumno: " + nombre + ", cuya edad es de: "+ edad + " años, y esta cursado: " + curso;
    document.write(cursado);
}
concatenado ("Juan Garcia",22,"Programación PHP y MySql");
document.write("</br>" + "</br>");
//Validar el envio de valores a la function
function estudio(instituto){
    return `Yo estudio en : ${instituto} ` ;
}
//ver pagina 35 para hacerlo como quieren
let dondeEstudio;
dondeEstudio=estudio();
document.write(dondeEstudio);
//Forma a
document.write("</br>" + "</br>");
function estudio2(instituto){
    if(typeof instituto ==="undefined") {
        instituto="CBTech";
    }
    return `Yo estudio en : ${instituto} `;
}
let dondeEstudio2;
dondeEstudio2=estudio2();
document.write(dondeEstudio2);

// Forma b
document.write("</br>" + "</br>");
function estudio3(instituto = "CBTech"){
    return`Yo estudio en : ${instituto} `;
}

let dondeEstudio3;
dondeEstudio3 = estudio3();
document.write(dondeEstudio3);

// Function Expression

document.write("</br>" + "</br>");
let suma = function(a=8,b=1){
    return a+b;
}
document.write(suma(5));
