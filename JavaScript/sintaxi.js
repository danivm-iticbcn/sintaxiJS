////////////NUMBERS
//EXERCICI 1
/*
console.log(isNaN(Number(prompt("Introduce un valor"))) ? 'No es un numero.':'Si que es un numero.');
*/

//EXERCICI 2
/*
let entrada2 = prompt("Introduce un valor");
//Comprobamos si es un numero y luego si contiene un . o ,
if (entrada2 && !isNaN(entrada2)){
    console.log(Number.isInteger(Number(entrada2)) ? 'És un enter.':'És un numero decimal.')
} else{
    console.log("No has introducido ningun valor correcto.")
}
*/

//EXERCICI 3
/*
let conversion = prompt("Introduce a que quieres convertir (C, F).");
let temperatura = prompt("Introduce la temperatura.");
let resultado;

//Comprobamos que la conversion sea correcta
if(conversion.toUpperCase() == "F" && Number.isInteger(temperatura)){
    resultado = (9.0 / 5.0) * parseFloat(temperatura) + 32;
} else if (conversion.toUpperCase() == "C" && Number.isInteger(temperatura)){
    resultado = (parseFloat(temperatura) - 32) / 1.8;
} else{
    resultado = "El formato de los campos es incorrecto.";
}
console.log(resultado);
*/

//EXERCICI 4
/*
let tiempo = prompt("Introduce el tiempo de la llamada MM:SS");
let minutos = Number(tiempo.slice(0,2));
let segundos = Number(tiempo.slice(3,5));
let tiempoSinIva = (minutos * 0.05) + 0.10;
if (segundos > 0) tiempoSinIva += 0.05;

let tiempoConIva = tiempoSinIva * 1.21;
//Mostramos y los dejamos en dos decimales
console.log("El precio de llamada sin IVA es: ", parseFloat(tiempoSinIvatoFixed(2)), "€");
console.log("El precio de llamada con IVA es: ", parseFloat(tiempoConIva.toFixed(2)), "€");
*/


//EXERCICI 5
/*
let eNumero5 = prompt("Introduce un numero de 5 digitos.");
let numero5 = Number(eNumero5);
if (isNaN(numero5)){
    console.log("No es numero")
} else{
    if (eNumero5[0] == eNumero5[eNumero5.length-1]){
        console.log("Capicua");
    } else if(eNumero5.length != 5){
        console.log("La longitud del numero debe de ser 5");
    }
}
*/

////////////STRINGS
//EXERCICI 6
/*
let entrada6 = prompt("Introduce una paraula");
let ultimoCaracter = entrada6[entrada6.length - 1];
console.log(Number.isInteger(Number(ultimoCaracter)) ? 'El ultimo caracter es un numero.':'El ultimo caracter es una letra.');
*/


//EXERCICI 7
/*
let entrada7 = prompt("Introduce una palabra");
console.log(entrada7.slice(0,1).toUpperCase() + entrada7.slice(1, entrada7.length));
*/


//EXERCICI 8
/*
let entrada8 = prompt("Introduce una palabra");
let arroba = entrada8.toLowerCase().includes("@");
let c = entrada8.toLowerCase().includes("c");;
console.log(arroba && c ? "La teva paraula conté '@' i 'c'.":"La teva paraula NO conté '@' i 'c'.");
*/

//EXERCICI 9
/*
let entrada9 = prompt("Introduce el nombre de un fichero.")
console.log("El teu fitxer té extensio ." + entrada9.split('.')[1]);
*/

//EXERCICI 10
/*
let entrada10 = prompt("Introduce un text");
tieneJs = entrada10.toLowerCase().includes("javascript");
if (tieneJs){
    console.log(entrada10.replace("javascript", "JS m'agrada!!"));
} else{
    console.log("El teu text no conté la paraula javascript.");
}
*/

//EXERCICI 11
/*
let entrada11 = prompt("Introduce un text");
console.log(entrada11.replace(' ', ','));
*/

//Exercici 12
/*
let entrada12 = prompt("Introduce una paraula");
console.log(entrada12.trim());
*/

//EXERCICI 13
/*
let entrada13 = prompt("Introduce la hora con formato (hh/mm/ss)").split('/');
console.log(`La hora introducida es: ${entrada13[0]}, los minutos: ${entrada13[1]}, y los segundos: ${entrada13[2]}.`);
*/

