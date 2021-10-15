const { Router } = require('express')
const rutas = Router();

const { registrarReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { editarReserva } = require('../controllers/controlador.js')
const { eliminarReserva } = require('../controllers/controlador.js')

rutas.get('/hotel:id', buscarReserva)
rutas.post('/hotel', registrarReserva)
rutas.put('/hotel:id', editarReserva)
rutas.delete('/hotel:id', eliminarReserva)

module.exports = rutas