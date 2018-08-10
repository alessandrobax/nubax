module.exports = function (app) {

    var api = app.api.extrato;
   
    app.route('/extrato')
        .get(api.getExtrato);
};