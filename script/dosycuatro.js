//-------------DOS
let alien = document.getElementById("alien2");
let alien4 = document.getElementById("alien4");
let mensajeVerde = document.getElementsByClassName("verde")


alien.addEventListener("mouseenter", function(){
    mensajeVerde[0].style.display = "block";
    console.log("funciona")
})

alien.addEventListener("mouseleave", function(){
    mensajeVerde[0].style.display = "none";
    console.log("funcionaaa")

})

//astro 

let astronauta = document.getElementById("astro")
let mensajeAzul= document.getElementsByClassName("mensajeA")


astronauta.addEventListener("mouseenter", function(){
    mensajeAzul[0].style.display = "block";
    mensajeAzul[1].style.display = "block";
})

astronauta.addEventListener("mouseleave", function(){
    mensajeAzul[0].style.display = "none";
    mensajeAzul[1].style.display = "none";
})


//--------------CUATRO
//alien
alien4.addEventListener("mouseenter", function(){
    mensajeVerde[1].style.display = "block";
})

alien4.addEventListener("mouseleave", function(){
    mensajeVerde[1].style.display = "none";
})

//starlord

let starLord = document.getElementById("starlord")
let mensajeSL = document.getElementById("imagenTSL")
let textoSL = document.getElementById("textoSL")

starLord.addEventListener("mouseenter", function(){
    mensajeSL.style.display = "block";
    textoSL.style.display = "block";
    
})

starLord.addEventListener("mouseleave", function(){
    mensajeSL.style.display = "none";
    textoSL.style.display = "none";

})
