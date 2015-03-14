'use strict';


angular.module('core').controller('HomeController', ['$scope', '$location', '$state', 'Polls', 'Authentication',
    function($scope, $location, $state, Polls, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.list = function() {
            $scope.polls = Polls.query();
        };

        $scope.create = function() {
            var poll = new Polls({
                name: this.poll.name,
                answers: this.poll.answers,
                responses: [0, 0, 0],
                openTime: new Date(),
                closeTime: new Date()
            });

            poll.$save(function(response) {
                $location.path('/');
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Set default time to 12:00 PM
        var d = new Date();
        d.setHours(12);
        d.setMinutes(0);
        $scope.mytime = d;

        // Set the step for hours and minutes.
        $scope.hstep = 1;
        $scope.mstep = 30;

        // Allows for 12 hour time format.
        $scope.ismeridian = true;

        $scope.changed = function() {
            $log.log('Time changed to: ' + $scope.mytime);
        };

        $scope.clear = function() {
            $scope.mytime = null;
        };
    }
]);