
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = document.getElementById("valorUsuario").value; 
    
    if(numeroUsuario == numeroSecreto){
        asignarTextoElemento("p",`acertaste en ${numeroIntentos} ${(numeroIntentos == 1 ) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value ="";
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1","juego del número secreto");
    asignarTextoElemento("p",`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    numeroIntentos = 1;
    return;
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;      
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //si el numero ingresado ya esta en el arreglo 
            return generarNumeroAleatorio();
        } else {
            //si el numero generado no esta en el arreglo 
            listaNumerosSorteados.push(numeroGenerado);         
            return numeroGenerado;
        }
        
    }
      
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
   
}


condicionesIniciales();