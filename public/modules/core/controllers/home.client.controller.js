'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Polls', 'Authentication',
    function($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.list = function() {
            $scope.polls = Polls.query();
        };
    }
]);