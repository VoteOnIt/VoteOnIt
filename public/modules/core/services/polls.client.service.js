'use strict';

angular.module('core').factory('Polls', [
    function() {
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