app.controller("extratoCtrl", function ($scope, $http, extratoAPI) {
    $scope.app = "Lista Clientes";

    $scope.extratos = [];

    $scope.carregarExtrato = function () {
        extratoAPI.getExtrato().then(function (data, status) {
            console.log(data.data);
            $scope.extratos = data.data;
        });
    };

});
