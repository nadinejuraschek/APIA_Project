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

    familyID: String

    //,
    // {    type: mongoose.Schema.Types.ObjectId,
    //      ref: ''
    // }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);