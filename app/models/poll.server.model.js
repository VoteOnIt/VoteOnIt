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
    question: {
        type: String,
        trim: true,
        required: true
    },
    answers: {
        type: [String],
        trim: true,
        required: true
    },
    responses: {
        type: [Number],
        default: []
    },
    private: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        expireAfterSeconds: 604800
    },
    customOptions: {
        type: Boolean,
        default: false
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

mongoose.model('Poll', PollSchema);