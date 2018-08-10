app.controller("listaClientesCtrl", function ($scope, $http, clientesAPI) {
    $scope.app = "Lista Clientes";
    console.log(1)

    $scope.clientes = [];

    $scope.carregarClientes = function () {
        clientesAPI.getClientes().then(function (data, status) {
            console.log(data.data);
            $scope.clientes = data.data;
        });
    };

    $scope.adicionarCliente = function (cliente) {
        clientesAPI.saveClientes(cliente).then(function (data) {
            delete $scope.cliente;
            $scope.clienteForm.$setPristine();
        });

    };
    $scope.apagarCliente = function (clientes) {
        $scope.clientes = clientes.filter(function (cliente) {
            if (!cliente.selecionado) return cliente;
        });
    };

    $scope.isClienteSelecionado = function (cliente) {
        return cliente.some(function (cliente) {
            return cliente.selecionado;
        });
    };
});