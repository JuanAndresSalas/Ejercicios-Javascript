
function comprobarProbabilidad(input){ //Declaracion de la función, acepta un parametro, dentro de la funcion se hace las comprobaciones correspondientes
    if (input % 1 == 0 && input >= 1 && input <= 100) { //Comprobación que el numero ingresado sea entero y esté entre 1 y 100
        if(input == 70 || input  == 55 || input >=5  && input <= 15 ){ //comprobación de números con probabilidades de ganar
            alert("El número ingresado tiene opciones de ganar")
        }else{
            alert("El número ingresado no es favorable")
        }
    } else {
        alert ("Debe ingresar un entero entre 1 y 100");
    }
    
}

$("#inputAzar").on("keyup",function(event){ //on("keyup") es un eventListener, cuando se levanta una tecla dentro del input ejecuta la funcion
    if (event.code === 'Enter') //comprueba si la tecla pulsada es enter, de serlo entra en el if
    {
       comprobarProbabilidad($("#inputAzar").val()); //llamada a la funcion comprobarProbabilidad declarada al inicio, acepta un parametro que es el valor del inputAzar en ese momento
    }
});

$("#botonAzar").on("click", function(){ //Al presionar el botón con id "botonAzar" llama a la funcion comprobarProbabilidad, acepta como parámetro el valor del inputAzar en ese momento
    comprobarProbabilidad($("#inputAzar").val())
}
)