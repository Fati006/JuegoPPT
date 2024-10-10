const respuestaComp = document.getElementById('respuestaComp');
const respuestaComp2 = document.getElementById('respuestaComp2');
const mensaje = document.getElementById('mensaje');
const MovimientoUsuario = document.getElementById('MovimientoUsuario');
const MovimientoComp = document.getElementById('MovimientoComp');
const botonPiedra = document.getElementById('botonPiedra');
const botonPapel = document.getElementById('botonPapel');
const botonTijera = document.getElementById('botonTijera');

var opcionUsuario;
var opcionComp;
var imgUsuario;
var imgComp;

const imagenes = [
    {
        name:"Piedra",
        url:"assets/movimientoPiedra.JPG"
    },
    {
        name:"Papel",
        url:"assets/movimientoPapel.JPG"
    },
    {
        name:"Tijera",
        url:"assets/movimientoTijera.JPG"
    }

];

function iniciar(){
    respuestaComp.style.display = 'block';
    respuestaComp2.style.display = 'block';
};

function opPc(){
    
    var aleatorio = nAleatorio();

    if (aleatorio == 0){
        opcionComp = "Piedra";
        document.getElementById("piedra").style.display = "block";
    }else if (aleatorio == 1){
        opcionComp = "Papel";
        document.getElementById("papel").style.display = "block";
    }else if (aleatorio == 2){
        opcionComp = "Tijera";
        document.getElementById("tijera").style.display = "block";
    }

    batalla();
    
};

botonPiedra.addEventListener('click', function(){
    opcionComp = null
    opcionUsuario = "Piedra";
    document.getElementById("piedra").style.display = "block";
    document.getElementById("papel").style.display = "none";
    document.getElementById("tijera").style.display = "none";
    opPc();
});

botonPapel.addEventListener('click', function(){
    opcionComp = null
    opcionUsuario = "Papel";
    document.getElementById("piedra").style.display = "none";
    document.getElementById("papel").style.display = "block";
    document.getElementById("tijera").style.display = "none";
    
    opPc();
});

botonTijera.addEventListener('click', function(){
    opcionComp = null
    opcionUsuario = "Tijera";
    document.getElementById("piedra").style.display = "none";
    document.getElementById("papel").style.display = "none";
    document.getElementById("tijera").style.display = "block";
    opPc();
});



function batalla(){
    alert(opcionComp)
    if (opcionUsuario === opcionComp){
        document.getElementById('mensaje').innerHTML = "¡Empate! :)";
    }
    else if (opcionUsuario === "Piedra" && opcionComp === "Tijera"){
        document.getElementById('mensaje').innerHTML = "¡Ganaste! :D";
    }
    else if (opcionUsuario === "Tijera" && opcionComp === "Papel"){
        document.getElementById('mensaje').innerHTML = "¡Ganaste! :D";
    }
    else if (opcionUsuario === "Papel" && opcionComp === "Piedra"){
        document.getElementById('mensaje').innerHTML = "¡Ganaste! :D";
    }else{
        document.getElementById('mensaje').innerHTML = "Perdiste... :("
    };

    //addImagenes();
};

function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
};

function addImagenes(){
    for (let i=0 ; i<imagenes.length ;i++){
        if(opcionUsuario == imagenes[i].name){
            imgUsuario = imagenes[i].url;
            var inserta = `<img class= "img-batalla" src=${imgUsuario} alt="">`;
            MovimientoUsuario.innerHTML = inserta; 
        };

        if (opcionComp== imagenes[i].name) {
            imgComp = imagenes[i].url;
            var inserta = `<img class= "img-batalla" src=${imgComp} alt="">`;
            MovimientoComp.innerHTML = inserta; 
        }
    };

    seccionBatalla.style.display = 'flex';

};

window.addEventListener('load', iniciar);