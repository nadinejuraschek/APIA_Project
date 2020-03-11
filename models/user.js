// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const userSchema = new mongoose.Schema({
    email: String,
    password: String,

    firstname: String,
    lastname: String,
    role: String,
    country: String,

    familyID: String,

    notebook: {
        workHours: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'WorkHour'
            }
        ],
        payment: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'Payment'
            }
        ],
        goals: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'Goal'
            }
        ],
        notes: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'Note'
            }
        ]
    }
});

module.exports = mongoose.model('User', userSchema);