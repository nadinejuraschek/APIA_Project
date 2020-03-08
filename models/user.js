// NPM PACKAGES
const   mongoose                = require('mongoose'),
        passportLocalMongoose   = require('passport-local-mongoose');

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
                ref: 'WorkHours'
            }
        ],
        payment: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'Payment'
            }
        ],
        goals: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'Goals'
            }
        ],
        notes: [
            {   type: mongoose.Schema.Types.ObjectId,
                ref: 'Notes'
            }
        ]
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);