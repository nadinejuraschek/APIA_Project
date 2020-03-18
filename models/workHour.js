// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const workSchema = new mongoose.Schema({
    number: { 
        type: Number,
        unique: true
    },
    day: [
        {
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
        }
    ],
    weeklyHours: Number
});

module.exports = mongoose.model('WorkHour', workSchema);