//Array, Vectores o Arreglos (pagina 104)
/*
let numeros= [10,20,30,40,50];
console.log(numeros);

var nombres =["juan","Pedro", "Miguel","María"];
document.write(nombres[1]);
document.write(nombres.length);
*/
let nombres=new Array();

nombres.push("Juan");
nombres.push("Pedro");
nombres.push("Miguel");
nombres.push("María");
for(let x=0; x<nombres.length;x++){//length se usa para saber cuando debe terminar
    document.write(nombres[x] + "<br>");
}
//Agregar elementos a un Array con .puch() y .unshift() (pag29)
nombres.push("Jorge");
nombres.push("Marcela");
document.write("</br>" + "</br>");

for(let x=0; x<nombres.length;x++){
    document.write(nombres[x] + "</br>");
}
document.write("</br>" + "</br>");
//.push sirve para colocar al final de un Array un valor nuevo
nombres.unshift("Verónica");
nombres.unshift("Mónica");

for(let x=0; x<nombres.length;x++){
    document.write(nombres[x] + "</br>");
}
document.write("</br>" + "</br>");
//.unshift sirve para colocar al principio del Array un valor nuevo
//Eliminar un elemento del Array
//.pop() al final
//.shift al inicio
nombres.shift(); //se puede cambiar por nombres.pop()
for(let x=0; x<nombres.length;x++){
    document.write(nombres[x] + "</br>");
}
document.write("</br>" + "</br>");
//Matrices
let distancias=new Array();
distancias[0]=new Array(251,368,295,320,171);
distancias[1]=new Array(170,287,190,227,78);
distancias[2]=new Array("-",105,38,57,92);
distancias[3]=new Array(95,57,57,65,16);
distancias[4]=new Array(105,"-",109,48,19);
distancias[5]=new Array(195,144,157,192,267);
for(let i=0;i<6;i++){
for(let j=0;j<5;j++){ if(j<4){
    document.write(distancias[i][j] + " ");
}else{
    document.write(distancias[i][j] + "</br>"); 
}
}}