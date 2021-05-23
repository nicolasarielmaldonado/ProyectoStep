const protagonista = {
    position: {
        positionX : 2,
        positionY : 2,
    },
    sprite: 'prota.png'
    
}

let $posicionActual;



// ESCUCHA DEL TECLADO Y LOGICA MOVIMIENTO (por ahora)
document.addEventListener("keydown", (event) => {
    //GUARDA POSICION ANTERIOR ANTES DEL CAMBIO.
    positionXAnterior = protagonista.position.positionX;
    positionYAnterior = protagonista.position.positionY;

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
        drawPersonaje();

    }
})

//ELIMINACION DEL MOVIMIENTO ANTERIOR
const clearDraw = (movimientoAnteriorX, movimientoAnteriorY) => {
    $posicionAnterior = document.getElementById(`${movimientoAnteriorX},${movimientoAnteriorY}`);
    $posicionAnterior.innerHTML = "";
}

//

const movimiento = () => {
    
} 

//DIBUJAR PERSONAJE EN EL MAPA
const drawPersonaje = () => { 
    $posicionActual = document.getElementById(`${protagonista.position.positionX},${protagonista.position.positionY}`); 
    const $image = document.createElement('img');
    $image.src = protagonista.sprite;   //carga en el elemento image el sprite
    $image.id = "protagonista";     //asigna id "protagonista" para uso en el movimiento

    $posicionActual.appendChild($image);    //agrega nuevo <image/> a <div>
} 

const inicializacion = () => {
    drawPersonaje();
}

inicializacion();