module.exports = function (app) {

    var api = app.api.transacoes;
   
    app.route('/transacoes')
        .get(api.getTransacoes);
};