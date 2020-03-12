// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const goalSchema = new mongoose.Schema({
    personal: [{
        month: Number,
        text: String
    }],
    travel: [{
        month: Number,
        text: String
    }],
    education: [{
        month: Number,
        text: String
    }]
});

module.exports = mongoose.model('Goal', goalSchema);