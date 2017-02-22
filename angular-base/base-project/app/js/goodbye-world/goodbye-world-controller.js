(function() {
    'use strict';

    angular.module('base.goodbye-world')
        .controller('GoodbyeWorldController', ['$scope', goodbyeWorldController]);

    function goodbyeWorldController($scope) {
        $scope.goodByeWorld = 'Goodbye World';
    }
})();