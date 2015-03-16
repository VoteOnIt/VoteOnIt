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
    createdAt: {type: Date, expires:((24*60*60*7)*1000), default:Date.now},
    //Sets things to expire in a week. Poll expire here! Convert to milliseconds!
    question: {
        type: String,
        trim: true
    },
    answers: {
        type: [String],
        trim: true
    },
    private: {
        type: Boolean
    },
    responses: {
        type: [Number]
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    openTime: {
        type: Date
    },
    closeTime: {
        type: Date
    }
});

mongoose.model('Poll', PollSchema);
