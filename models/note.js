// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const notesSchema = new mongoose.Schema({
    
});

module.exports = mongoose.model('Note', notesSchema);