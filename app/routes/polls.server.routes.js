'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller');
    var polls = require('../../app/controllers/polls.server.controller');

    app.route('/polls')
        .get(polls.list)
        .post(users.requiresLogin, polls.create);

    app.param('pollId', polls.pollByID);
};