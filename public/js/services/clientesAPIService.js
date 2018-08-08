angular.module("listaClientes").factory("clientesAPI", function ($http) {
    var _getClientes = function () {
        return  $http.get("http://localhost:3000/clientes");
    };

    var _saveClientes = function (cliente) {
        return  $http.post("http://localhost:3000/clientes", cliente);
    };

    return {
        getClientes: _getClientes, 
        saveClientes: _saveClientes
    }
});