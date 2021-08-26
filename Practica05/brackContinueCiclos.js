/*
for(let contador = 1; contador <= 10; contador++){
    if(contador%2 == 0){//para obtener numeros pares
        console.log(contador);
        brack;//Detiene la ejecución del programa
    }
   
}
*/

for(let contador = 1; contador <= 10; contador++){
    if(contador%2 == 0){//para obtener numeros pares
        continue;//para que salte los pares        
    }
    console.log(contador);
}
