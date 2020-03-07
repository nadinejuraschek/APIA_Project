// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const workSchema = new mongoose.Schema({
    week: Number,
    date: Date,
    time: [
        {
            start: Number,
            end: Number,
            totalHours: Number
        }
    ],
    dailyHours: Number,
    weeklyHours: Number,
    dayOff: Boolean
});

module.exports = mongoose.model('WorkHours', workSchema);