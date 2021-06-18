//Uso Stricto
'use strict';

//---Logica---

//Array de objetos con todas las posiciones de juego (yDelMapa = xDelMapa)
const Mapa = [];

//Open del menu
const botonMenu = document.getElementById("botonmenu");
const menuDesplegable = document.getElementById("menu_desplegado");
const botonocultar = document.getElementById("menu_ocultar")

//Agregar/Quitar clases para el display de los botones
botonMenu.addEventListener("click", ()=>{
    menuDesplegable.classList.remove("displaynone");
})
botonocultar.addEventListener("click", ()=>{
    menuDesplegable.classList.add("displaynone");
})

//Ancho y largo del mapa completo
const YDelMapa = 100;
const XDelMapa = 100;

//ContadorPasos
const ContadorPasos = () => {
    if (jugador.pasos > 0){
        jugador.pasos--;
    } else {
        jugador.vida--;
    }
}

//Crea todas las posiciones del mapa y sus respectivos objetos y sprites
const CrearMapa = () => {
    for (let i=0 ; i<YDelMapa ; i++){ //Filas
        for (let j = 0 ; j<XDelMapa ; j++){ // Columnas
            if(i===jugador.posicion.posicionY && j===jugador.posicion.posicionX){
                Mapa.push({y:i,x:j, objeto:jugador.sprite ,sprite:"./assets/Naturaleza/Piso.png"});
            } else {
                 Mapa.push({y:i,x:j, sprite:"./assets/Naturaleza/Piso.png"});
            }
        }
    }

    //Invocacion de objetos
    GeneracionEnMapa(piedras);
    GeneracionEnMapa(cerca);
    GeneracionEnMapa(cartel);
    GeneracionEnMapa(calabaza);
    GeneracionEnMapaEstructuras(agua);
    GeneracionEnMapaEstructuras(arboles);
    GeneracionEnMapaEstructuras(casa);
}

//Generacion en mapa objetos chicos
const GeneracionEnMapa = (objeto) => {
    for (let i = 0; i<objeto.posiciones.length; i++){
        EncontrarPosicion(objeto.posiciones[i].y, objeto.posiciones[i].x).objeto = objeto.posiciones[i].objeto = `${objeto.nombre}`;
    }
}

//Generacion en mapa estructuras
const GeneracionEnMapaEstructuras = (objeto) => {
    Object.entries(objeto.spritesConPosiciones).forEach(item => {
        item[1].posiciones.forEach(element => {
            EncontrarPosicion(element.y, element.x).objeto = element.objeto = `${item[0]}`
        })
    })
}

//Funcion auxiliar de generacion en mapa
const EncontrarPosicion = (y, x) => {       
    return Mapa[(y*100+x)];   //Retorna objeto en esas coordenadas
}

//mapa[(jugador.posicion.posicionX + jugador.posicion.posicionY*100)] Posicion del jugador en el array Mapa

//Control de la posibilidad de moverse pero no bruscamente
let tiempoMovimiento = true;

//Movimiento y colision
document.addEventListener("keydown", (event) => {

    if ((event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) && jugador.vida>0 && tiempoMovimiento){       

        if(event.keyCode === 38 && !(Mapa[(jugador.posicion.posicionX+((jugador.posicion.posicionY-1)*100))].objeto)){
            //ARRIBA   
            let posicionActualMovil = Mapa[(jugador.posicion.posicionX + (jugador.posicion.posicionY*100))];
            delete posicionActualMovil.objeto;
            
            Mapa[(jugador.posicion.posicionX + ((jugador.posicion.posicionY-1)*100))].objeto = jugador.sprite;
            jugador.posicion.posicionY--;

            ContadorPasos();
            ActualizarVida();
            ActualizarPasos();

            tiempoMovimiento = false;
        }

        if(event.keyCode === 37 && !(Mapa[((jugador.posicion.posicionX-1)+((jugador.posicion.posicionY)*100))].objeto)){
            //IZQUIERDA
            let posicionActualMovil = Mapa[(jugador.posicion.posicionX + (jugador.posicion.posicionY*100))];
            delete posicionActualMovil.objeto;
            
            Mapa[((jugador.posicion.posicionX-1) + ((jugador.posicion.posicionY)*100))].objeto = jugador.sprite;
            jugador.posicion.posicionX--;

            ContadorPasos();
            ActualizarVida();
            ActualizarPasos();

            tiempoMovimiento = false;
        }

        if (event.keyCode === 40 && !(Mapa[(jugador.posicion.posicionX+((jugador.posicion.posicionY+1)*100))].objeto)){
            //ABAJO
            let posicionActualMovil = Mapa[(jugador.posicion.posicionX + (jugador.posicion.posicionY*100))];
            delete posicionActualMovil.objeto;
            
            Mapa[((jugador.posicion.posicionX) + ((jugador.posicion.posicionY+1)*100))].objeto = jugador.sprite;
            jugador.posicion.posicionY++;

            ContadorPasos();
            ActualizarVida();
            ActualizarPasos();

            tiempoMovimiento = false;
        }

        if (event.keyCode === 39 && !(Mapa[((jugador.posicion.posicionX+1)+(jugador.posicion.posicionY*100))].objeto)){
            //DERECHA
            let posicionActualMovil = Mapa[(jugador.posicion.posicionX + (jugador.posicion.posicionY*100))];
            delete posicionActualMovil.objeto;
            
            Mapa[((jugador.posicion.posicionX+1) + ((jugador.posicion.posicionY)*100))].objeto = jugador.sprite;
            jugador.posicion.posicionX++;

            ContadorPasos();
            ActualizarVida();
            ActualizarPasos();

            tiempoMovimiento = false;
        }

        //Tiempo para volver a moverse
        setTimeout(() =>{
            tiempoMovimiento = true;
        },0);
    }
    RenderMapa();
});

//---Renderizado---

//Posee los elementos del "canvas"
const arrayDivs = [];

//Constantes denominantes de tamaño del dom manipulable
const YDelDom = 13;
const XDelDom = 21;   // css(grid-template-columns === XDelDom)

//Actualiza interface pasos
const ActualizarPasos = () => {
    let $contadorDom = document.getElementById("contador");
    $contadorDom.textContent = `${jugador.pasos}/${jugador.maxPasos}`;
}

//Actualiza interface vida
const ActualizarVida = () => {
    let $vidaDom = document.getElementById("vida");
    $vidaDom.textContent = `${jugador.vida}/${jugador.maxVida}`;
}

//Crea dinamicamente los divs del map con sus Ids
const SetDivsMapa = () => {
    let $parentDom = document.getElementById("map");

    for (let i = 0 ; i<YDelDom ; i++){      //Filas
        for (let j = 0 ; j<XDelDom ; j++){  //Columnas 
            let $tileMapa = document.createElement("div");
            $tileMapa.id = `${i},${j}`;
            $parentDom.appendChild($tileMapa);
            arrayDivs.push({y:i, x:j, elem:$tileMapa}); //Pushea los elemenos con posiciones al array
        }
    }
}

//Invocar distintos suelos en el renderizado
const InvocarSuelo = (param,i,j) => {
    param.posiciones.forEach((e) =>{
        if(e.y === i && e.x === j){
            Mapa[j+(i*100)].sprite = param.sprite
        } 
    })
}

//Variable para borrar las posiciones de los objetos (flag)
let primerRender = true;

//Renderiza cada movimiento
const RenderMapa = () => { 
    
    let inicioDelRender = {y: jugador.posicion.posicionY-6, x:jugador.posicion.posicionX-10}; //Primer <div> del DOM(0,0)

    //Array que guarda los objetos complejos para su renderizacion y la invocacion de la funcion que lo hace
    let arrayEstructuras = []; 
    const PusharObjetosComplejos = (e) =>{
        Object.entries(e.spritesConPosiciones).forEach(objeto => {
            arrayEstructuras.push(objeto[1]);
        })
    }

    PusharObjetosComplejos(casa);
    PusharObjetosComplejos(agua);
    PusharObjetosComplejos(arboles);
    
    //Bucle renderizador
    for (let i = 0 ; i<YDelDom ; i++){      //Filas
        for (let j = 0 ; j<XDelDom ; j++){  //Columnas
            let $divDom = arrayDivs[j+i*XDelDom].elem; //Elemento del dom <div> a renderizar
            const $spriteImg = document.createElement('img'); // Elemento <img> a insertar en $divDom
            $spriteImg.id = `${(inicioDelRender.y+i)},${(inicioDelRender.x+j)}`; //Otorga los ids segun la posicion en el Mapa

            //Invocaciones de distintos suelos
            InvocarSuelo(pisoTierra,(inicioDelRender.y+i),(inicioDelRender.x+j));
            InvocarSuelo(puerta,(inicioDelRender.y+i),(inicioDelRender.x+j));
            
            //Segun la posicion inicial,empiza a cargar en los src de las imagenes todos los sprites del div, segun sus
            //posiciones multiplicados por 100(logica del grid del mapa).
            $spriteImg.src = Mapa[(inicioDelRender.x+j)+(inicioDelRender.y+i)*YDelMapa].sprite;

            //Borra los elementos viejos
            if (!primerRender){
                while ($divDom.firstChild){
                    $divDom.firstChild.remove();
                }
            }
            
            if(Mapa[(inicioDelRender.x+j)+(inicioDelRender.y+i)*YDelMapa].objeto){

                //Si el sprite a renderizar tiene la posicion del jugador, lo inserta en $divDom
                if (Mapa[(inicioDelRender.x+j)+(inicioDelRender.y+i)*YDelMapa].objeto === jugador.sprite) {
                    const $objetoImg = document.createElement('img');
                    $objetoImg.src = jugador.sprite;
                    $objetoImg.id = "jugador";
                    $divDom.appendChild($objetoImg);
                }

                //Invocacion de objetos comunes
                BuscarObjetosYRenderizarlos(piedras, inicioDelRender, i, j, $divDom);
                BuscarObjetosYRenderizarlos(cartel, inicioDelRender, i, j, $divDom);
                BuscarObjetosYRenderizarlos(calabaza, inicioDelRender, i, j, $divDom);
                BuscarObjetosYRenderizarlos(cerca, inicioDelRender, i, j, $divDom);

                arrayEstructuras.forEach((objeto) =>{   //Recorre el array de objetos complejos y los renderiza
                    BuscarObjetosYRenderizarlos(objeto, inicioDelRender, i, j, $divDom);
                })
            }
            //Le inserta su hijo osea las imagenes en cada vuelta.
            $divDom.appendChild($spriteImg); 
        }
    }
    //Para que se borren desp de la primera actualizacion
    primerRender = false; 
}

//Renderizacion de objetos comunes
const BuscarObjetosYRenderizarlos = (elemento, inicioDelRender, i, j, $divDom) => {
    if (Mapa[(inicioDelRender.x+j)+(inicioDelRender.y+i)*YDelMapa].objeto === elemento.nombre){
        const $objetoImg = document.createElement('img');
        $objetoImg.src = elemento.sprite;
        $objetoImg.classList.add("objetosDeJuego");   
        $divDom.appendChild($objetoImg);
    }
}

//---Inicializacion de la aplicacion---

const Inicializacion = () => {
    console.log("Inicializando");
    ActualizarPasos();  //Interface
    ActualizarVida();   //Vida
    SetDivsMapa();      //Crear divs (grid)
    CrearMapa();        //Crea estado inicial del Mapa
    RenderMapa();       //Renderiza estado del mapa
    console.log("Inicializacion completa");
}

Inicializacion ();