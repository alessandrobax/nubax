var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: {
        type: String,
        // required: true
    }, 
    idade: {
        type: Number,
        // required: true
    }, 
    endereco: {
        type: String,
        // required: true
    }, 
    conta: {
        type: Number,
        // required: true
    }, 
    saldo: {
        type: Number,
        // required: true
    } 

});

mongoose.model('Cliente', schema);