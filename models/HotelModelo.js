const {model, Schema} = require('mongooose')
const HotelModelo=Schema({
    nombre:{
        type:String,
        required:true
    },
    reserva:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    }
})

module.exports=model('Hotel', HotelModelo)