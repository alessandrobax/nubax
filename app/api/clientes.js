var mongoose = require('mongoose');

var api = {};

var clientes = [
    {_id: 1, nome: 'Ana', idade: 20, endereco: "Rua XPTO", conta: 001, saldo: 500},
    {_id: 1, nome: 'Pedro', idade: 47, endereco: "Rua Dois", conta: 002, saldo: 7500}
    
];

//existe um problema de conexão com o banco, e por esse motivo os dados estão declarados na API.

api.getClientes = async function (req, res) {
    res.json(clientes);
};

api.addClientes = function (req, res) {

};

module.exports = api;

