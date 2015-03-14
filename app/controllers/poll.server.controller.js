'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
 * Create a Poll
 */
exports.create = function(req, res) {
    var poll = new Poll(req.body);

    poll.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(poll);
        }
    });
};

/**
 * Show the current Poll
 */
exports.read = function(req, res) {
    res.jsonp(req.poll);
};

/**
 * Update a Poll
 */
exports.update = function(req, res) {
    var poll = req.poll;

    poll = _.extend(poll, req.body);

    poll.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(poll);
        }
    });
};

/**
 * Delete an Poll
 */
exports.delete = function(req, res) {
    var poll = req.poll;

    poll.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(poll);
        }
    });
};

/**
 * List of Polls
 */
exports.list = function(req, res) {
    Poll.find().sort({
        date: 1
    }).populate('user', 'displayName').exec(function(err, polls) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(polls);
        }
    });
};

exports.pollByID = function(req, res, next, id) {
    Poll.findById(id).populate('user', 'displayName').exec(function(err, poll) {
        if (err) return next(err);
        if (!poll) return next(new Error('Failed to load Poll ' + id));
        req.poll = poll;
        next();
    });
};