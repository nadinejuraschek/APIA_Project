// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const goalSchema = new mongoose.Schema({
    three: {
        personal: [],
        travel: [],
        education: []
    },
    six: {
        personal: [],
        travel: [],
        education: []
    },
    nine: {
        personal: [],
        travel: [],
        education: []
    },
    twelve: {
        personal: [],
        travel: [],
        education: []
    }
});

module.exports = mongoose.model('Goal', goalSchema);