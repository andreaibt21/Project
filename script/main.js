//J: Cree esta funcion para que tengan el mismo fondo 
function Back_Ground(ide){
    square = document.getElementById(ide);
    square.innerHTML = "<div class='background'>"
    square.innerHTML +='<img id="backgroundStars" src="img/background/background_estrellas.png" alt="estrellas">'
    square.innerHTML +='<img id="estrella-fugaz" src="img/background/estrellafugaz.png" alt="">'
    square.innerHTML +='<img id="estrella-fugaz1" src="img/background/estrellafugaz.png"  alt="">'
    square.innerHTML +='<img id="estrella-fugaz2" src="img/background/estrellafugaz.png"  alt="">'
    square.innerHTML +='<img id="estrella-fugaz3" src="img/background/estrellafugaz.png" alt="">'
    
    square.innerHTML +="</div>"
    console.log(square.innerHTML);
    return square;
    }
    //pero solo lo aplique a los cuadritos 6,10,14. Pueden utilizarlo tambien
    Back_Ground("bg6");
    Back_Ground("bg10");
    Back_Ground("bg14");

    // audio final

    function audioFinal(){
        let audioFinal = document.getElementById("audioFinal");
        let audioGeneral = document.getElementById("audioGeneral");
        let main = document.getElementsById("container");

        audioFinal.innerHTML += '<audio src="./sound/007741506_prev.mp3" autoplay="true"></audio>'
        main.removeChild(audioGeneral);

    }
    //funcion animaciones pag 7
    function animarPaginaSiete() {
      let meteorito = document.getElementById("meteorito");
      // let marciano = document.getElementById("marcianito7");
      let marcianoMuerto = document.getElementById("marcianitoMuerto7");
      // let cartelMuerte = document.getElementById("cartel-muerte");
      // let botonRevivir = document.getElementById("revivir");
     

      // meteorito.classList.add("meteorito");
      // marciano.classList.add("marcianito7");
      // marcianoMuerto.classList.add("marcianitoMuerto7");
      // cartelMuerte.classList.add("cartel-muerte");
      // botonRevivir.classList.add("revivir7");

      meteorito.style.display = "block";
      marcianoMuerto.style.display = "block";
   }

//    function animarPaginaQuince(){
//     let marciano = document.getElementById("marcianito15");
//     let cartelMuerte = document.getElementById("cartel-muerte-15");
//     let botonRevivir = document.getElementById("revivir");

//     marciano.classList.add("marcianito15");
//     cartelMuerte.classList.add("cartel-muerte");
//     botonRevivir.classList.add("revivir15");

//     marciano.classList.add("marcianito15")
//     cartelMuerte.classList.add("cartel-muerte")
//  }




//J:Cambiar de ID para tener distintos diseños
let divc=document.getElementById("seis")

function modificar_id(ide){
    divc.setAttribute("id","seis");
    let enlace=document.getElementById(ide);
    if(enlace.getAttribute("id") == "seis_c" ){
        divc.setAttribute("id","c_seis");
    }else if(enlace.getAttribute("id") == "seis_d"){
        divc.setAttribute("id","d_seis");
    }

}

//MODAL
function modal(){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    
   
      modal.style.display = "block";
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

}

