import express from 'express'

export let rutas=express.Router()

//DEFINO LAS RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACIONES
//1.Servicio Agregar habitacion
rutas.post('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})
//2. Servicio para buscar TODAS las habitaciones
rutas.get('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//RUTAS PARA LOS SERVICIOS DE RESERVAS