(function() {
    angular.module('routes', []);
    angular.module('routes').config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('hello-world', {
                url : '/hello-world',
                templateUrl : './views/hello-world.html',
                controller : 'HelloWorldController'
            })
            .state('goodbye-world', {
                url : '/goodbye-world',
                templateUrl : './views/goodbye-world.html',
                controller : 'GoodbyeWorldController'
            })
        ;
        $urlRouterProvider.otherwise('/hello-world');
    });
})();
