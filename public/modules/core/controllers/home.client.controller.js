'use strict';


angular.module('core').controller('HomeController', ['$scope', '$stateParams', '$window', '$location', '$state', 'Polls', 'Authentication',
    function($scope, $stateParams, $window, $location, $state, Polls, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        window.MY_SCOPE = $scope;
        $scope.geolib = geolib;

        $scope.geolocate = function() {
            window.navigator.geolocation.getCurrentPosition(function(position) {
                $scope.$apply(function() {
                    $scope.position = position;
                });
            }, function(error) {
                alert(error);
            });
            if ($scope.postion == undefined) {
                $window.navigator.geolocation.getCurrentPosition(function(position) {
                    $scope.$apply(function() {
                        $scope.position = position;
                    });
                }, function(error) {
                    alert(error);
                });
            }
        };

        $scope.list = function() {
            $scope.polls = Polls.query();
        };
        $scope.choices = [1, 2, 3];

        $scope.addResponse = function(answers) {
            $scope.choices.push(($scope.choices.length + 1));
        };
        $scope.create = function() {
            var poll = new Polls({
                name: this.poll.name,
                answers: this.poll.answers,
                responses: [0, 0, 0],
                latitude: this.position.coords.latitude,
                longitude: this.position.coords.longitude,
                openTime: new Date(),
                closeTime: new Date()
            });

            poll.$save(function(response) {
                $location.path('/');
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };


        $scope.update = function() {
            var poll = $scope.poll;

            poll.$update(function() {
                $location.path('polls/' + poll._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.findOne = function() {
            $scope.poll = Polls.get({
                pollId: $stateParams.pollId
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