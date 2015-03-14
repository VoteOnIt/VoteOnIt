'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller');
    var polls = require('../../app/controllers/polls.server.controller');

    app.route('/polls')
        .get(polls.list)
        .post(polls.create);

    app.route('/polls/:pollId')
        .get(polls.read)
        .put(polls.update)
        .delete(polls.delete);

    app.param('pollId', polls.pollByID);
};