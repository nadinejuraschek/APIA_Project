// NPM PACKAGES
const   mongoose                = require('mongoose'),
        passportLocalMongoose   = require('passport-local-mongoose');

// SCHEMA SETUP
const userSchema = new mongoose.Schema({
    username: String,
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
    },

    hostfamily: {
        info: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Info'
        },
        diary: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Diary'
        },
        tips: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tips'
        }
    },

    cluster: {
        counselor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Counselor'
        },
        aupairs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AuPairs'
        },
        area: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Area'
        },
        education: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Education'
        },
        travel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Travel'
        }
        resources: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Resources'
        }
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);