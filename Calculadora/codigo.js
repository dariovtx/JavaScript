//LLAMO A LAS FUNCIONES Y DECLARO LA FUNCION DEL BOTON C Y =

$(document).ready(function(){

    concatenarActual('b0',0);
    concatenarActual('b1',1);
    concatenarActual('b2',2);
    concatenarActual('b3',3);
    concatenarActual('b4',4);
    concatenarActual('b5',5);
    concatenarActual('b6',6);
    concatenarActual('b7',7);
    concatenarActual('b8',8);
    concatenarActual('b9',9);

    concatenarAnterior('btn-suma','+');
    concatenarAnterior('btn-resta','-');
    concatenarAnterior('btn-multiplica','*');
    concatenarAnterior('btn-divide','/');

//LIMPIA LA PANTALLA
$('#btn-c').click(function(){

    $('#actual-valor').text('0');
    $('#anterior-valor').text('');

});

//OBTIENE LOS NUMEROS Y DEVUELVE EL RESULTADO
$('#btn-igual').click(function (){

    valorActual=$('#actual-valor').text();   
    cantidadguardada=$('#anterior-valor').text();
    tipo=cantidadguardada.split(" ");

    switch(tipo[1]){
        case '+':
            resultado= parseFloat(tipo[0]) + parseFloat(valorActual);

            $('#actual-valor').text(resultado);
            $('#anterior-valor').text('');
        break;
        case '-':
            resultado= parseFloat(tipo[0])-parseFloat(valorActual);

            $('#actual-valor').text(resultado);
            $('#anterior-valor').text('');
        break;
        case '*':
            resultado=parseFloat(valorActual) * parseFloat(tipo[0]);

            $('#actual-valor').text(resultado);
            $('#anterior-valor').text('');
        break;
        case '/':
            resultado= parseFloat(tipo[0]) / parseFloat(valorActual);

            $('#actual-valor').text(resultado);
            $('#anterior-valor').text('');
        break;

    }

});

});


function concatenarActual(control,valor){
    
    $('#' + control).click(function(){
    
        if($('#actual-valor').text()!='0'){

        var valActual=$('#actual-valor').text();
        cadena=valActual + valor;
        $('#actual-valor').text(cadena);
    
    }else{
    
        $('#actual-valor').text(valor);
    
    }
    });
}
//GUARDA EL ACTUAL EN ANTERIOR JUNTO CON EL OPERADOR
function concatenarAnterior(idd,operador){
   
    $('#'+ idd).click(function(){
      
        let numero= $('#actual-valor').text();    
        $('#anterior-valor').text( numero + ' ' + operador );
        $('#actual-valor').text('0');
    
    });
  
}


