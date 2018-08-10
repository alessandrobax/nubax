var mongoose = require('mongoose');

var api = {};

var extratos = [
    {data: '18/10/2006', tipo: "Depósito", valor: 500, saldo: 1500},
    {data: '23/10/2006', tipo: "Saque", valor: 100, saldo: 1400},
    {data: '25/10/2006', tipo: "Depósito", valor: 800, saldo: 2200},
    {data: '30/10/2006', tipo: "Depósito", valor: 450, saldo: 2650},
    {data: '02/11/2006', tipo: "Saque", valor: 100, saldo: 2550}
];

//existe um problema de conexão com o banco, e por esse motivo os dados estão declarados na API.

api.getExtrato = async function (req, res) {
    res.json(extratos);
};


module.exports = api;