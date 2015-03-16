'use strict';


angular.module('core').controller('HomeController', ['$scope', '$q', '$stateParams', '$window', '$location', '$state', 'Polls', 'Authentication',
    function($scope, $q, $stateParams, $window, $location, $state, Polls, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        window.MY_SCOPE = $scope;
        $scope.geolib = geolib;

        // $scope.geolocate = function() {
        //     window.navigator.geolocation.getCurrentPosition(function(position) {
        //         $scope.$apply(function() {
        //             $scope.position = position;
        //         });
        //     }, function(error) {
        //         alert(error);
        //     });
        //     if ($scope.postion == undefined) {
        //         $window.navigator.geolocation.getCurrentPosition(function(position) {
        //             $scope.$apply(function() {
        //                 $scope.position = position;
        //             });
        //         }, function(error) {
        //             alert(error);
        //         });
        //     }
        // };

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
                question: this.poll.question,
                answers: this.poll.answers,
                responses: 0,
                //latitude: this.position.coords.latitude,
                //longitude: this.position.coords.longitude,
                latitude: 0,
                longitude: 0,
                customOptions: false, 
                openTime: new Date(),
                closeTime: new Date(),
                private: this.private
            });
            poll.$save(function(response) {
                if (response.private == false) {
                    $location.path('/');
                } else {
                    $location.path('key/' + response._id);
                }
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.update = function() {
            var poll = $scope.poll;

            poll.$update(function() {
                $location.path('results/' + poll._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.setCustomOptionsOpposite = function(poll) {
            poll.customOptions = !poll.customOptions;
            console.log(poll.customOptions);
        };
        $scope.findOne = function() {
            $scope.poll = Polls.get({
                pollId: $stateParams.pollId
            });
        };

        $scope.private = false;

        $scope.setPrivate = function() {
            $scope.private = true;
        };

        $scope.setPublic = function() {
            $scope.private = false;
        };

        $scope.isPrivate = function() {
            if ($scope.private == true)
                return 'btn-warning';
        };

        $scope.isPublic = function() {
            if ($scope.private == false)
                return 'btn-warning';
        };
        $scope.add = function(a, b) {
            return a + b;
        };

        $scope.search = function() {
            $location.path('vote/' + this.searchField);
        };

        $scope.populate = function() {
            $scope.findOne();
            $scope.data = {
                key: 0,
                values: 0
            };
            $scope.data.key = this.poll.name;
            $scope.data.values = this.poll.responses;
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

        $scope.vote = function(index) {
            for (var i = 0; i < this.poll.answers.length; i++) {
                if (this.poll.responses[i] == null) {
                    this.poll.responses[i] = 0;
                }
            }
            this.poll.responses[index] = this.poll.responses[index] + 1;
            $scope.update();
        };
    }
]);
