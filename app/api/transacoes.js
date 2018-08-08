var mongoose = require('mongoose');

var api = {};

var transacoes = [
    {data: new Date(), cliente: 'Ana', tipo: "Saque", valor: 500, conta: 001},
    {data: new Date(), cliente: 'Lucas', tipo: "Depósito", valor: 83, conta: 002}
    
];

//existe um problema de conexão com o banco, e por esse motivo os dados estão declarados na API.

api.getTransacoes = async function (req, res) {
    res.json(transacoes);
};


module.exports = api;