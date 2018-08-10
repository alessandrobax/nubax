var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/novoCliente", {
            templateUrl: "view/novoCliente.html",
            // controller: "view/novoCliente.html"
        })
        .when("/relatorioTransacoes", {
            controller: "listaTransacoesCtrl",
            templateUrl: "view/relatorioTransacoes.html"
        })
        .when("/relatorioExtrato", {
            controller: "extratoCtrl",
            templateUrl: "view/relatorioExtrato.html"
        })
        .when("/relatorioClientes", {
            controller: 'listaClientesCtrl',
            templateUrl: 'view/relatorioClientes.html'
        });
    $locationProvider.html5Mode(true);
});