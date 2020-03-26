// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const workSchema = new mongoose.Schema({
    number: { 
        type: Number,
        unique: true
    },
    mon: {
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
    },
    tue: {
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
    },
    wed: {
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
    },
    thu: {
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
    },
    fri: {
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
    }, 
    sat: {
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
    },
    sun: {
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
    },
    weeklyHours: Number
});

module.exports = mongoose.model('WorkHour', workSchema);