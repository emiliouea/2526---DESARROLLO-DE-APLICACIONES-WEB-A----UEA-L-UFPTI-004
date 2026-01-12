
console.log("Hola  clase encuentro del paralelo A de Desarrollo de Aplicaciones Web");
//alert("Bienvenidos al curso de Desarrollo de Aplicaciones Web");
/*
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const h1 = document.querySelector("h1");
console.log(h1);*/

// ejemplo de cambiar el texto del h1 al dar click en el boton

function cambiarTexto(){
    document.getElementById("nombres").innerText = "Nuevo Texto del Titulo";
}

function cambiarColor(){
    document.getElementById("nombres").style.color = "red";
}

// ejemplo de alerta 
function mostrarAlerta(){
    alert("Esta es una alerta desde una funcion");
}   

// funtion para el parrafo 

function cambiarParrafo(){
    document.getElementById("parrafo").innerText = "Nuevo Texto del Parrafo clase de Desarrollo de Aplicaciones Web";
}

// cmabiar color de fondo 
function cambiarFondo(){
    document.body.style.backgroundColor = "lightblue";
}








