'use strict'


// Para llmrla desede el html 

/*
var btn = document.querySelector("#buton");

function cambiarCalor(){
    console.log("Yes, I do")
    var bg = btn.style.background;

    if(bg == "blue"){ 
       btn.style.background="red";
    }else {
        btn.style.background="blue";
    }

    btn.style.padding= "20px";
    btn.style.border="3px solid"

    return true;

}

*/

// Onclick 


window.addEventListener('load', function(){


    //Otro metodo
    var btn = document.querySelector("#buton");

    btn.addEventListener('click', function () {

        var bg = btn.style.background;

        if (bg == "blue") {
            btn.style.background = "red";
        } else {
            btn.style.background = "blue";
        }

        btn.style.padding = "20px";
        btn.style.border = "3px solid"

        return true;
    });

    // Mouse over 

    btn.addEventListener('mouseover', function () {

        btn.style.background = "orange";

    });

    // Mouseout 

    btn.addEventListener('mouseout', function () {

        btn.style.background = "green";
    });

    //focus 

    var form = document.querySelector("#campo_nombre");

    form.addEventListener('focus', function () {
        console.log("Me estas apretando, soy focus")

    });

    //blur

    form.addEventListener('blur', function () {

        console.log("Cuando me dejas de pulsar, soy el blur");

    })

    //Keydown

    form.addEventListener('keydown', function (event) {

        console.log("Las letras que pulsas:", String.fromCharCode(event.keyCode));

    });

    //keypress

    form.addEventListener('keypress', function (event) {

        console.log("[keypress] Las letras que introduces soy key press:", String.fromCharCode(event.keyCode));

    });
    
}); 

// Fin del load para que el script de este DOM cargue en cualquier parte del html
