(function() {
    'use strict';

    angular.module('base.hello-world')
        .controller('HelloWorldController', ['$scope', helloWorldController]);

    function helloWorldController($scope) {
        $scope.helloWorld = 'Hello World';
    }
})();