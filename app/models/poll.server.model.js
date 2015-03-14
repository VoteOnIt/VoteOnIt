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
    pollName: {
        type: String,
        trim: true
    }
});

mongoose.model('Poll', PollSchema);