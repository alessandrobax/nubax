angular.module("app").factory("transacoesAPI", function ($http) {
    
    var _getTransacoes = function () {
        return  $http.get("http://localhost:3000/transacoes");
    };

    return {
        getTransacoes: _getTransacoes
    }
});
