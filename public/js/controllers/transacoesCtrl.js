angular.module("listaClientes").controller("listaTransacoesCtrl", function ($scope, $http, transacoesAPI) {
    $scope.app = "Lista Clientes";

    $scope.transacoes = [];

    $scope.carregarTransacoes = function () {
        transacoesAPI.getTransacoes().then(function (data, status) {
            console.log(data.data);
            $scope.transacoes = data.data;
        });
    };

});