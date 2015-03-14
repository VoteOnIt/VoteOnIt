'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
    pollId: {
        type: String,
        trim: true
    },
    prompt: {
        type: String,
        trim: true
    },
    answers: {
        type: [String],
        trim: true
    },
    responses: {
        type: [Number]
    }
});

mongoose.model('Question', QuestionSchema);