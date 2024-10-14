/*
Un callback es cuando le pasas a una funcion un 
otra funcion como argumento. Usualmente casi siempre
es el ultimo parametro de la función
*/

// Sumar 2 elementos

function resultado(num1, num2, suma){
    return suma(num1, num2)
}

function sumar(a,b){
    return a + b
}

console.log(resultado(1,2,sumar))

// saludo


function saludo(nombre, saludar){
    setTimeout(() =>{
        console.log("test")
        console.log(saludar(nombre))
    }, 2000)
}


function saludar(nombre){
    return `Hola ${nombre}`
}



saludo("Yubor",saludar)