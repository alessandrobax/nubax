module.exports = function (app) {

    var api = app.api.clientes;
   
    app.route('/clientes')
        .get(api.getClientes)
        .post(api.addClientes);

};