//----------------- Brack -----------------\\
/*
for(let contador = 1; contador <= 10; contador++){
    if(contador%2 == 0){//para obtener numeros pares
        console.log(contador);
        brack;//Detiene la ejecución del programa
    }
   
}
*/
//----------------- Continue -----------------\\
for(let contador = 1; contador <= 10; contador++){
    if(contador%2 == 0){//para obtener numeros pares
        continue;//para que salte los pares        
    }
    console.log(contador);
}

//----------------- Etiquetas -----------------\\
//El uso de etiquetas no es recomendado pero hay que conocerlos 
//A este estilo de programación se lo conoce como "go-to"
/*
inicio:
for(let contador = 1; contador <= 10; contador++){
    if(contador%2 == 0){//para obtener numeros pares
        console.log(contador);
        brack inicio;//Detiene la ejecución del programa en donde se encuentra inicio
    }
*/
inicio:
for(let contador = 1; contador <= 10; contador++){
    if(contador%2 !== 0){//para obtener numeros pares
        continue inicio;//para que salte los pares y vaya a la etiqueta inicio       
    }
    console.log(contador);
}


