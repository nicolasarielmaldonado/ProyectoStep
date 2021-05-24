'use strict';


//Protagonista y sus caracteristicas
const jugador = {
    sprite: '/src/prota.png',
    posicion: {
        posicionX : 6,
        posicionY : 10,
    },
    maxPasos: 100,
    pasos: 100,
    maxVida: 50,
    vida: 50,
    inventorio: []
}


// Codigo numero al azar
// const NumeroAlAzar = () =>{
//     let numerito = Math.floor(Math.random() * 2);
//     return numerito;
// }



const piedras = [{x:2,y:3},{x:5,y:9},{x:8,y:2}];   //GENERADO RANDOM // ARRAY DE PIEDRAS

const dibujarPiedras = () =>{
    piedras.forEach(e => {
        let $piedraDOM = document.getElementById(`${e.y},${e.x}`);
        const $imagepiedra = document.createElement('img');
        $imagepiedra.src = "/src/roca.png"; 
        $piedraDOM.appendChild($imagepiedra);   
    });
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
            if (!colisionEstado){
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
            if (!colisionEstado){
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
            if (!colisionEstado){
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
            if (!colisionEstado){
                jugador.posicion.posicionX++;
            }
        }


        //Funciones a realizar al moverse
        limpiarJugador(posicionYAnterior,posicionXAnterior);
        dibujarMapa();
    }
});

//Borrar la posicion anterior
const limpiarJugador = (movimientoAnteriorY, movimientoAnteriorX) => {
    let $posicionAnterior = document.getElementById(`${movimientoAnteriorY},${movimientoAnteriorX}`);
    $posicionAnterior.innerHTML = "";
}

//Dibujar jugador en el map      //   ----->CAMBIAR A DRAW GLOBAL
const dibujarMapa = () => { 
    let $posicionActual = document.getElementById(`${jugador.posicion.posicionY},${jugador.posicion.posicionX}`); 
    const $imagenJugador = document.createElement('img');
    $imagenJugador.src = jugador.sprite;   //Carga en el elemento image el sprite del jugador
    $imagenJugador.id = "jugador";     //asigna id "jugador" para uso en el movimiento

    $posicionActual.appendChild($imagenJugador);    //Agrega nuevo <image/> a <div>
    $posicionActual = document.getElementById(`${jugador.posicion.posicionY},${jugador.posicion.posicionX}`);
} 

//Inicar dibujado al cargar la aplicacion
const inicializacion = () => {
    dibujarMapa();
    dibujarPiedras();
}


inicializacion();
