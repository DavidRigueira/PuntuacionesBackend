var express = require('express');
var app = espress();
var bodyParser = require('body-parse');

app.use(bodyParser.urlencoded((extended(false))));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.status(200).send("Hola David")
});
app.get('/spuntuaciones/', (req, res) => {
    let datosJson = {
        accion: "get all",
        datos: {
                {nombre: 'Pepe', puntuacion: 33},
                {nombre: 'Angel', puntuacion: 20},
                {nombre: 'Bea', puntuacion: 15}
        }
    }
    res.status(200).send(datosJson)
});
