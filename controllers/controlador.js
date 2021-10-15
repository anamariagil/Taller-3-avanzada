const { request, response } = require('express')

function registrarReserva(peticion = request, respuesta = response) {

    let datosPeticion=peticion.body

    respuesta.json({
        mensaje: "Registrar Reserva",
        datos:datosPeticion
    })

}

function buscarReserva(peticion = request, respuesta = response) {

    let id=peticion.params.id

    respuesta.json({
        mensaje: "Buscar reserva" +id
    })

}

function editarReserva(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "Editar una reserva"
    })

}

function eliminarReserva(peticion = request, respuesta = response) {

    let id=peticion.params.id

    respuesta.json({
        mensaje: "Eliminar reserva"
    })

}

module.exports = {

    registrarReserva,
    buscarReserva,
    editarReserva,
    eliminarReserva

}