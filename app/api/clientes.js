var mongoose = require('mongoose');

var api = {};

var clientes = [
    {_id: 1, nome: 'Ana', idade: 20, endereco: "Rua XPTO", conta: 001, saldo: 500},
    {_id: 2, nome: 'Pedro', idade: 47, endereco: "Rua Dois", conta: 002, saldo: 7500},
    {_id: 3, nome: 'João', idade: 34, endereco: "Rua Cinco", conta: 003, saldo: 565},
    {_id: 4, nome: 'Lucas', idade: 87, endereco: "Rua Raul", conta: 004, saldo: 4576},
    {_id: 5, nome: 'Maria', idade: 55, endereco: "Rua Fontana", conta: 005, saldo: 550},
    {_id: 6, nome: 'Jorge', idade: 23, endereco: "Rua Rio", conta: 006, saldo: 3487},
    {_id: 7, nome: 'Antônio', idade: 418, endereco: "Rua Guajajaras", conta: 007, saldo: 45}
    
];

//existe um problema de conexão com o banco, e por esse motivo os dados estão declarados na API.

api.getClientes = async function (req, res) {
    res.json(clientes);
};

api.addClientes = function (req, res) {

};

module.exports = api;

