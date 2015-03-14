'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Poll Schema
 */
var PollSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    answers: {
        type: [String],
        trim: true
    },
    responses: {
        type: [Number]
    },
    openTime: {
        type: Date
    },
    closeTime: {
        type: Date
    }
});

mongoose.model('Poll', PollSchema);