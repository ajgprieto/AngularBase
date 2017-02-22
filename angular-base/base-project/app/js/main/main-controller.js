(function() {
    'use strict';

    angular.module('base')
        .controller("MainCtrl", ['$scope', '$state', mainController]);

    function mainController($scope, $state) {
        console.log('main');
        $scope.goToHelloWorld = function() {
            $state.go('hello-world');
        }

        $scope.goToGoodbyeWorld = function() {
            console.log("alksdjflaksjfdlkj");
            $state.go('goodbye-world');
        }
    }
})();