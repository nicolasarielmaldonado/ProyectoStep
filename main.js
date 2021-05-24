'use strict';


//Protagonista y sus caracteristicas
const jugador = {
    sprite: '/src/prota.png',
    posicion: {
        posicionX : 6,
        posicionY : 10,
    },
    maxPasos: 10,
    pasos: 50,
    maxVida: 50,
    vida: 50,
    inventorio: [],
}

let posicionesOcupadas = [
    [jugador.posicion.posicionX, jugador.posicion.posicionY]  //POSICION INICIAL DEL PERSONAJE / IMPOSIBILITA EL SPAWN SOBRE ESE TILE
];

//GENERA POSICION DE OBJETOS AL AZAR Y PUSHEA A ARRAY DE POSICIONES OCUPADAS
const PosObjectosAlAzar = () => { 

    let numeritoX = Math.floor((Math.random() * 15)+1);
    let numeritoY = Math.floor((Math.random() * 15)+1);
    let noRepetidos = 0;


    posicionesOcupadas.forEach((e, i) => {
        if(posicionesOcupadas[i][0] === numeritoX && posicionesOcupadas[i][1] === numeritoY){ //LO QUE PASA SI ENCUENTRA UN NUMERO IGUAL YA GENERADO
        } else {
        /*  arrayNumeros.push([numeritoX, numeritoY]); //PUSHEA SI NO EXISTE */
            noRepetidos++;
        }
    })
    if (noRepetidos === posicionesOcupadas.length){
        posicionesOcupadas.push([numeritoX, numeritoY]);
        return {x:posicionesOcupadas[posicionesOcupadas.length-1][0], y:posicionesOcupadas[posicionesOcupadas.length-1][1]}; 
    } else {
        return PosObjectosAlAzar();
    }
}


const contadorPasos = () => {
    if (jugador.pasos > 0 ){
        jugador.pasos--;
    } else {
        console.log("SIN PASOS");
    }
    
}

//Actualiza interface pasos
const ActualizarPasos = () => {
    let $contadorDOM = document.getElementById("contador");
    $contadorDOM.textContent = jugador.pasos;
}

const piedras = [
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar(),
    PosObjectosAlAzar()
];   //GENERADO RANDOM // ARRAY DE PIEDRAS 

const DibujarPiedras = () =>{
    piedras.forEach(e => {
        let $piedraDOM = document.getElementById(`${e.y},${e.x}`);
        const $imagepiedra = document.createElement('img');
        $imagepiedra.src = "/src/roca.png"; 
        $piedraDOM.appendChild($imagepiedra);  
        }
    );
}


//Escucha del teclado y control de movimientos
document.addEventListener("keydown", (event) => {

    //Guardar posiciones x,y anteriores para borrar el dibujado
    let posicionYAnterior = jugador.posicion.posicionY;
    let posicionXAnterior = jugador.posicion.posicionX;

    //Ejecucion solo al presionar teclas correctas
    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){

        if (event.keyCode === 38){//ARRIBA BUCLE QUE VERIFICA COLISION CON PIEDRAS
            let colisionEstado = false;
            piedras.forEach(e =>{
                if ((jugador.posicion.posicionY - 1) === e.y && (jugador.posicion.posicionX === e.x)){
                    colisionEstado = true;
                }
            })
            if (!colisionEstado && jugador.pasos>0){
                contadorPasos();
                ActualizarPasos();
                jugador.posicion.posicionY--;
            }
        }

        if (event.keyCode === 37){//IZQUIERDA
            let colisionEstado = false;
            piedras.forEach(e =>{
                if ((jugador.posicion.posicionX - 1) === e.x && (jugador.posicion.posicionY === e.y)){
                    colisionEstado = true;
                }
            })
            if (!colisionEstado && jugador.pasos>0){
                contadorPasos();
                ActualizarPasos();
                jugador.posicion.posicionX--;
            }
        }

        if (event.keyCode === 40){//ABAJO
            let colisionEstado = false;
            piedras.forEach(e =>{
                if ((jugador.posicion.posicionY + 1) === e.y && (jugador.posicion.posicionX === e.x)){
                    colisionEstado = true;
                }
            })
            if (!colisionEstado && jugador.pasos>0){
                contadorPasos();
                ActualizarPasos();
                jugador.posicion.posicionY++;
            }
        }

        if (event.keyCode === 39){//DERECHA
            let colisionEstado = false;
            piedras.forEach(e =>{
                if ((jugador.posicion.posicionX + 1) === e.x && (jugador.posicion.posicionY === e.y)){
                    colisionEstado = true;
                }
            })
            if (!colisionEstado && jugador.pasos>0){
                contadorPasos();
                ActualizarPasos();
                jugador.posicion.posicionX++;
            }
        }


        //Funciones a realizar al moverse
        LimpiarJugador(posicionYAnterior,posicionXAnterior);
        DibujarMapa();
    }
});

//Borrar la posicion anterior
const LimpiarJugador = (movimientoAnteriorY, movimientoAnteriorX) => {
    let $posicionAnterior = document.getElementById(`${movimientoAnteriorY},${movimientoAnteriorX}`);
    $posicionAnterior.innerHTML = "";
}
 
//Construye Divs de mapa
const SetDivsMapa = () => {
    let $parentDom = document.getElementById("map");

    for (let i = 1 ; i<31 ; i++){//columna
        for (let j = 1 ; j<31 ; j++){ //fila mantener relacion con grid-template-columns
            let $tileMapa = document.createElement("div");
            $tileMapa.id = `${i},${j}`
            $parentDom.appendChild($tileMapa);

        }
    }
}

//Dibujar jugador en el map      //   ----->CAMBIAR A DRAW GLOBAL
const DibujarMapa = () => { 
    let $posicionActual = document.getElementById(`${jugador.posicion.posicionY},${jugador.posicion.posicionX}`); 
    const $imagenJugador = document.createElement('img');
    $imagenJugador.src = jugador.sprite;   //Carga en el elemento image el sprite del jugador
    $imagenJugador.id = "jugador";     //asigna id "jugador" para uso en el movimiento

    $posicionActual.appendChild($imagenJugador);    //Agrega nuevo <image/> a <div>
    $posicionActual = document.getElementById(`${jugador.posicion.posicionY},${jugador.posicion.posicionX}`);
} 

//Inicar dibujado al cargar la aplicacion
const Inicializacion = () => {
    SetDivsMapa();
    DibujarMapa();
    DibujarPiedras();
    ActualizarPasos();
}


Inicializacion();
