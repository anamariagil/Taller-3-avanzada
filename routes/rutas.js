const { Router }= require('express')

const rutas=Router()

rutas.get('/hotel', function (req, res) {
    res.send('Get')
})

rutas.post('/hotel', function (req, res) {
    res.send('Post')
})

rutas.put('/hotel', function (req, res) {
    res.send('Put')
})

rutas.delete('/hotel', function (req, res) {
    res.send('Delete')
})

module.exports=rutas