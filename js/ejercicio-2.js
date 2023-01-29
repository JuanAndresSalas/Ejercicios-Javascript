function añoBisiesto(input){
    if(input >= 0){
        if(input % 4 == 0 && input % 100 != 0 || input % 400 == 0){
            alert("El año " + input + " es bisiesto")
        }else{
            alert("El año " + input + " no es bisiesto")
        }
    }else{
        alert("Ingresa un número mayor a cero")
    }
};

$("#inputAño").on("keyup",function(event){
    if (event.code === "Enter") {
        añoBisiesto($("#inputAño").val())
    }
});

$("#botonAño").on("click", function(){
    añoBisiesto($("#inputAño").val())
})