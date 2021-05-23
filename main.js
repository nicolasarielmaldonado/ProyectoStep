//Typescript
'use strict';

//Protagonista y sus caracteristicas
const jugador = {
    sprite: '/src/prota.png',
    posicion: {
        posicionX : 8,
        posicionY : 9,
    },
    pasos: 100
}

//Codigo objeto colisionable

// const piedras = {
//     piedra1:{
//         posicionX:4,
//         posicionY:4
//     },
//     piedra2:{
//         posicionX:6,
//         posicionY:6
//     }
// }

// Codigo numero al azar

// const NumeroAlAzar = () =>{
//     let numerito = Math.floor(Math.random() * 2);
//     return numerito;
// }


const piedras = [{x:8,y:8},{x:6,y:6}];

let piedradibu;

const dibujarLasPiedras = () =>{
    piedras.forEach(e => {
        piedradibu = document.getElementById(`${e.y},${e.x}`);
        console.log(piedradibu)
        const $imagepiedra = document.createElement('img');
        $imagepiedra.src = "/src/roca.png"; 
        piedradibu.appendChild($imagepiedra);   
    });
}

dibujarLasPiedras();


//Dibujar piedra colicionable


// const dibujarpiedra = () =>{
//     piedradibu = document.getElementById(`${piedra.posicion.posicionY},${piedra.posicion.posicionX}`); //Carga la piedra en el elemento del Dom
//     const $imagepiedra = document.createElement('img');
//     $imagepiedra.src = piedra.sprite;  
//     piedradibu.appendChild($imagepiedra);  
// }

// dibujarpiedra();

//crear generador enemigos
/* class Enemy {
    constructor(AGREGAR POSICION COMO OBJETO) {
        this.type = type;
        this.position = {
            positionx: 0,
            positionY: 0
        }
        this.position.posX = posX;
        this.position.posY = posY;
    }
}

const zombie1 = new Enemy("A", {posX: 1, posY : 1});
 */

//--automatizar creacion de enemigos (!)


let $posicionActual;

//Escucha del teclado y control de movimientos
document.addEventListener("keydown", (event) => {

    //Guardar posiciones x,y anteriores para borrar el dibujado
    let posicionYAnterior = jugador.posicion.posicionY;
    let posicionXAnterior = jugador.posicion.posicionX;

    //Ejecucion solo al presionar teclas correctas
    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){

        // piedras.forEach(e =>{
        //     if( (jugador.posicion.posicionY -1) === e.y && (jugador.posicion.posicionX)=== e.x) 
        // });

        let pepo = false;

        if (event.keyCode === 38){
            piedras.forEach(e =>{
                if( (jugador.posicion.posicionY -1) === e.y && (jugador.posicion.posicionX)=== e.x){
                    pepo = true;
                }
            })

                if(pepo != false){
                    jugador.posicion.posicionY--;
                    pepo= false;
                }
        
    }
        // if (event.keyCode === 37){
        //     if((jugador.posicion.posicionX - 1) === piedra.posicion.posicionX && jugador.posicion.posicionY === piedra.posicion.posicionY){
        //     }else{ //Izquierda
        //         jugador.posicion.posicionX--;
        //     }
        // }
        // if (event.keyCode === 40){
        //     if((jugador.posicion.posicionY + 1) === piedra.posicion.posicionY && jugador.posicion.posicionX === piedra.posicion.posicionX){
        //     }else{ //Abajo
        //         jugador.posicion.posicionY++;
        //     }
        // }
        // if (event.keyCode === 39){  
        //     if((jugador.posicion.posicionX + 1) === piedra.posicion.posicionX && jugador.posicion.posicionY === piedra.posicion.posicionY){
        //     }else{ //Derecha
        //         jugador.posicion.posicionX++;
        //     }
        // }

        //con la piedra

        // if(jugador.posicion.posicionX === piedra.posicion.posicionX && jugador.posicion.posicionY === piedra.posicion.posicionY){
        //     jugador.posicion.posicionX++;
        // }

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

//Dibujar jugador en el map      //   ----->CAMBIAR A DRAW GLOBAL
const DibujarMapa = () => { 
    $posicionActual = document.getElementById(`${jugador.posicion.posicionY},${jugador.posicion.posicionX}`); 
    const $imagenJugador = document.createElement('img');
    $imagenJugador.src = jugador.sprite;   //Carga en el elemento image el sprite del jugador
    $imagenJugador.id = "jugador";     //asigna id "jugador" para uso en el movimiento

    $posicionActual.appendChild($imagenJugador);    //Agrega nuevo <image/> a <div>
    $posicionActual = document.getElementById(`${jugador.posicion.posicionY},${jugador.posicion.posicionX}`);
} 

//Inicar dibujado al cargar la aplicacion
const inicializacion = () => {
    DibujarMapa();
}

inicializacion();