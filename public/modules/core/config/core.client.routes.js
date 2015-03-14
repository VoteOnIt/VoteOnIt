'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
		state('results', {
			url: '/resultspollid',
			templateUrl: 'modules/core/views/results.client.view.html'
		}).
        state('vote', {
            url: '/vote/:pollId',
            templateUrl: 'modules/core/views/vote.client.view.html'
        }).
        state('create', {
            url: '/create',
            templateUrl: 'modules/core/views/create.client.view.html'
        }).
        state('home', {
            url: '/',
            templateUrl: 'modules/core/views/home.client.view.html'
        });
    }
]);