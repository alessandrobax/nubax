angular.module("app").factory("extratoAPI", function ($http) {
    
    var _getExtrato = function () {
        return  $http.get("http://localhost:3000/extrato");
    };

    return {
        getExtrato: _getExtrato
    }
});