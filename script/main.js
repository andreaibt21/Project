//J: Cree esta funcion para que tengan el mismo fondo 
function Back_Ground(ide){
    square = document.getElementById(ide);
    square.innerHTML = "<div class='background'>"
    square.innerHTML +='<img id="backgroundStars" src="img/background/background_estrellas.png" alt="estrellas">'
    square.innerHTML +='<img id="estrella-fugaz" src="img/background/estrellafugaz.png" alt="">'
    square.innerHTML +='<img id="estrella-fugaz1" src="img/background/estrellafugaz.png"  alt="">'
    square.innerHTML +='<img id="estrella-fugaz2" src="img/background/estrellafugaz.png"  alt="">'
    square.innerHTML +='<img id="estrella-fugaz3" src="img/background/estrellafugaz.png" alt="">'
    square.innerHTML +='<img id="planeta2" src="img/background/planeta2.png" alt="planeta2">'
    square.innerHTML +="</div>"
    console.log(square.innerHTML);
    return square;
    }
    //pero solo lo aplique a los cuadritos 6,10,14. Pueden utilizarlo tambien
    Back_Ground("bg5");
    Back_Ground("bg6");
    Back_Ground("bg9");
    Back_Ground("bg10");
    Back_Ground("bg14");

