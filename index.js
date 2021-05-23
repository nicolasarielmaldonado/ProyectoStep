'use strict';

const protagonista = {
    position: {
        positionX : 2,
        positionY : 2,
    },
    sprite: 'prota.png'
    
}

//crear generador enemigos
/* class Enemy {
    constructor(AGREGAR POSICION COMO OBJETO) {
        this.type = type;
        this.position.posX = posX;
        this.position.posY = posY;
    }

}

const zombie1 = new Enemy("A", {posX: 1, posY : 1});
 */

//--automatizar creacion de enemigos (!)


let $posicionActual;

// ESCUCHA DEL TECLADO Y LOGICA MOVIMIENTO (por ahora)
document.addEventListener("keydown", (event) => {
    //GUARDA POSICION ANTERIOR ANTES DEL CAMBIO.
    let positionXAnterior = protagonista.position.positionX;
    let positionYAnterior = protagonista.position.positionY;

    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
        if (event.keyCode === 38){ //ARRIBA
            protagonista.position.positionX--;
        }
        if (event.keyCode === 37){  //IZQUIERDA
            protagonista.position.positionY--;
        }
        if (event.keyCode === 40){  //ABAJO
            protagonista.position.positionX++;
        }
        if (event.keyCode === 39){  //DERECHA
            protagonista.position.positionY++;
        }
        clearDraw(positionXAnterior,positionYAnterior);
        drawMapa();

    }
})

//ELIMINACION DEL MOVIMIENTO ANTERIOR
const clearDraw = (movimientoAnteriorX, movimientoAnteriorY) => {
    let $posicionAnterior = document.getElementById(`${movimientoAnteriorX},${movimientoAnteriorY}`);
    $posicionAnterior.innerHTML = "";
}

//

const movimiento = () => {
    
} 

//DIBUJAR PERSONAJE EN EL MAPA    //      ----->CAMBIAR A DRAW GLOBAL
const drawMapa = () => { 
    $posicionActual = document.getElementById(`${protagonista.position.positionX},${protagonista.position.positionY}`); 
    const $image = document.createElement('img');
    $image.src = protagonista.sprite;   //carga en el elemento image el sprite
    $image.id = "protagonista";     //asigna id "protagonista" para uso en el movimiento

    $posicionActual.appendChild($image);    //agrega nuevo <image/> a <div>

    $posicionActual = document.getElementById(`${protagonista.position.positionX},${protagonista.position.positionY}`); 

} 

const inicializacion = () => {
    drawMapa();
}

inicializacion();