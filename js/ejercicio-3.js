
function resultadoTenis(A, B) { //Declaración de funcion resultadoTenis(), acepta dos parametros A y B
    if(A <= 5 && B <= 5 || A == 6 && B == 5 || B == 6 && A == 5 || A == 6 && B == 6){//Condicionales set aún en disputa
        alert("El set aún no termina")
    }else if(A == 6 &&  B <= 4 || A == 7 && B >= 5 && B <= 6){ // Condicionales si A gana
        alert("A ganó el set")
    }else if(B == 6 && A <= 4 || B == 7 && A >= 5 && A <= 6){ // Condicionales si B gana
        alert("B ganó el set")
    }else if(A >= 7 && B <= 5 || B >= 7 && A <= 5 ){ // Condicionales para resultados imposibles
        alert("Resultado inválido")
    }else{
        alert("Resultado inválido")
    }
}


$("#inputA").on("keyup", function(event){ //on("keyup") activa la funcion cuando una tecla se levanta dentro del inputA
    if(event.code === "Enter"){ //Comprueba que la tecla pulsada sea enter
        if($("#inputA").val() == "" || $("#inputB").val() == ""){ // Si alguno de los input esta vacio entra en el if
            alert("Ingrese puntaje de ambos jugadores")
        }else{  // Si ambos campos contienen un valor entra en el else
            resultadoTenis($("#inputA").val(),$("#inputB").val()) // LLamada a la funcion resultadoTenis, tomando como  parametros los valores de los input
        }
    }

})

$("#inputB").on("keyup", function(event){ //Misma funcion que para el inputA pero para el inputB
    if(event.code === "Enter"){
        if($("#inputA").val() == "" || $("#inputB").val() == ""){
            alert("Ingrese puntaje de ambos jugadores")
        }else{
            resultadoTenis($("#inputA").val(),$("#inputB").val())
        }
    }
})

$("#botonTenis").on("click", function(){ //Funcion para evaluar los puntajes del set cuando se clickea el boton con id "botonTenis"
    
    if($("#inputA").val() == "" || $("#inputB").val() == ""){ // También evalua que ambos input contengan un valor
        alert("Ingrese puntaje de ambos jugadores")
    }else{
        resultadoTenis($("#inputA").val(),$("#inputB").val()); //Llamada a la funcion resultadoTenis()
    }
    
})
