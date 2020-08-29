// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const workSchema = new mongoose.Schema({
    date: Object,
    hours: [
        {
            start: Object,
            end: Object,
            duration: Number
        }
    ],
    total: Number
});

module.exports = mongoose.model('Workhour', workSchema);