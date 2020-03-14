// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const goalSchema = new mongoose.Schema({
    month: Number,
    type: String,
    text: String
});

module.exports = mongoose.model('Goal', goalSchema);