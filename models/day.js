// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const daySchema = new mongoose.Schema({
    date: String,
    // time: [
    //     {
    //         start: String,
    //         end: String,
    //         totalHours: Number
    //     }
    // ],
    dailyHours: Number,
    dayOff: Boolean
});

module.exports = mongoose.model('Day', daySchema);