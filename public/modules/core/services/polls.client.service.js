'use strict';

angular.module('core').factory('Polls', ['$resource',
    function($resource) {
        // Poll service logic
        // ...
        return $resource('polls/:pollId', {
            pollId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);