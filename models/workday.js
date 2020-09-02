// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const workdaySchema = new mongoose.Schema({
    date: Object,
    hours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workhour' }],
    total: Number
});

module.exports = mongoose.model('Workday', workdaySchema);