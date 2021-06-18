// Objetos del Juego

//Simples
const jugador = {
    sprite: "./assets/Personaje/Jugador64px.png",
    posicion: {
        posicionY : 32,
        posicionX : 42
    },
    maxPasos : 40,
    pasos : 40,
    maxVida: 50,
    vida: 50,
    inventario: []
}

const calabaza = {
    nombre: "Calabaza",
    sprite: "./assets/Naturaleza/Calabaza.png",
    posiciones:[
        {y:33, x:49},
    ]
}

const cartel = {
    nombre: "CartelMadera",
    sprite: "./assets/Casa/CartelMadera.png",
    posiciones:[
        {y:34, x:46}
    ]
}

const cerca = {
    nombre: "cerca",
    sprite: "./assets/Casa/CercaMadera.png",
    posiciones: [
        {y:34, x:39},
        {y:34, x:38},
        {y:30 ,x:38},
        {y:30 ,x:39},
    ]
}

const piedras = {
    nombre: "piedras",
    sprite: "./assets/Naturaleza/Piedras.png",
    posiciones: [
        {y:36, x:40},
        {y:38, x:37}
    ]
}

const pisoTierra = {
    nombre: "PisoTierra",
    sprite: "./assets/Naturaleza/PisoTierra.png",
    posiciones:[
        {y:35, x:43},
        {y:36, x:43},
        {y:37, x:43},
        {y:37, x:44},
        {y:37, x:45},
        {y:37, x:46},
        {y:37, x:47},
        {y:38, x:47},
    ]
}

const puerta = {
    nombre: "PuertaLadrillo",
    sprite: "./assets/Casa/PuertaLadrillo.png",
    posiciones:[
        {y:34, x:43}
    ]
}

//Complejos
const agua = {
    nombre: "agua",
    spritesConPosiciones: {
        aguaBot:{
            nombre: "aguaBot",
            sprite: "./assets/Agua/AguaBot.png",
            posiciones: [
                {y:34 ,x:34},
                {y:35 ,x:36},
            ]
        },
        aguaBotLeft:{
            nombre: "aguaBotLeft",
            sprite: "./assets/Agua/AguaBotLeft.png",
            posiciones: [
                {y:34 ,x:33},
                {y:35 ,x:35},
            ]
        },
        aguaBotRight:{
            nombre: "aguaBotRight",
            sprite: "./assets/Agua/AguaBotRight.png",
            posiciones: [
                {y:35 ,x:37},
            ]
        },
        aguaGeneral:{
            nombre: "aguaGeneral",
            sprite: "./assets/Agua/AguaGeneral.png",
            posiciones: [
                {y:33 ,x:34},
                {y:33 ,x:35},
                {y:33 ,x:36},
                {y:34 ,x:36},
                {y:32 ,x:35},
                {y:31 ,x:36},
                {y:32 ,x:36},
                {y:34 ,x:35},
            ]
        },
        aguaLeft:{
            nombre: "aguaLeft",
            sprite: "./assets/Agua/AguaLeft.png",
            posiciones: [
                {y:33 ,x:33},
                {y:31 ,x:35},
            ]
        },
        aguaRight:{
            nombre: "aguaRight",
            sprite: "./assets/Agua/AguaRight.png",
            posiciones: [
                {y:31 ,x:37},
                {y:34 ,x:37},
                {y:33 ,x:37},
                {y:32 ,x:37},
            ]
        },
        aguaTop:{
            nombre: "aguaTop",
            sprite: "./assets/Agua/AguaTop.png",
            posiciones: [
                {y:32 ,x:34},
                {y:30 ,x:36},
            ]
        },
        aguaTopLeft:{
            nombre: "aguaTopLeft",
            sprite: "./assets/Agua/AguaTopLeft.png",
            posiciones: [
                {y:32 ,x:33},
                {y:30 ,x:35},
            ]
        },
        aguaTopRight:{
            nombre: "aguaTopRight",
            sprite: "./assets/Agua/AguaTopRight.png",
            posiciones: [
                {y:30 ,x:37},
            ]
        }
    }
}

const arboles = {
    nombre: "arboles",
    spritesConPosiciones: {
        arbol1:{
            nombre: "arbol1",
            sprite: "./assets/Naturaleza/Arbol.png",
            posiciones:[
                {y:36, x:48},
                {y:38, x:48},
                {y:36, x:46},
            ]
        },
        arbol2:{
            nombre: "arbol2",
            sprite: "./assets/Naturaleza/Arboles.png",
            posiciones:[
                {y:37, x:48},
            ]
        }
    }
}

const casa = {
    nombre: "casa",
    spritesConPosiciones: {
        ladrillo:{
            nombre: "ladrillo",
            sprite: "./assets/Casa/ladrillo.png",
            posiciones: [
                {y:32,x:40},
                {y:31,x:40},
                {y:30,x:40},
                {y:30,x:42},
                {y:30,x:43},
                {y:30,x:44},
                {y:30,x:45},
                {y:31,x:45},
                {y:32,x:45},
                {y:34,x:45},
                {y:34,x:44},
                {y:34,x:42},
                {y:34,x:41},
                {y:34,x:40},
            ]
        }, 
        camaMadera:{
            nombre: "camaMadera",
            sprite: "./assets/Casa/CamaMadera.png",
            posiciones: [
                {y:32,x:41}
            ]
        },
        ladrilloRoto:{
            nombre: "ladrilloRoto",
            sprite: "./assets/Casa/LadrilloRoto.png",
            posiciones: [
                {y:30,x:41},
                {y:33,x:45},
            ]
        }
    }
}