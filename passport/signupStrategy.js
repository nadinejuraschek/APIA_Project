const   LocalStrategy   = require('passport-local').Strategy,
        bcrypt          = require('bcryptjs'),
        User            = require('../models/user');

const salt = bcrypt.genSaltSync(10);

const   localStrategy = new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, function(req, email, password, done) {

    User.findOne( { email }).lean().exec(( err, user ) => {
        if (err) {
            return done(err, null);
        }
        if (user) {
            return done('User already exists.', user);
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            // make sure hackers can't see if the error is for the email or password
            return done('E-Mail or Password not valid.', null)
        };

    });
});

module.exports = localStrategy;