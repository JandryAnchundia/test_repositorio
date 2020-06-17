'use strict'

/**
 * Los parametros rest y spread
 */

function listadodeFrutas(fruta1, fruta2, ...frutas_restantes){

    console.log("fruta", fruta1 );
    console.log("fruta", fruta2 );
    console.log("fruta", frutas_restantes);
}

listadodeFrutas("Manzana", "Naranja", "Melon", "Ciruela", "Sandia", "Cactus");

var frutas = ["Muchas", "Otras", "Frutas"];

listadodeFrutas(...frutas)

