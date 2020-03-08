const   LocalStrategy   = require('passport-local').Strategy,
        bcrypt          = require('bcryptjs'),
        User            = require('../models/user');

const salt = bcrypt.genSaltSync(10);

const   LoginStrategy = new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
        User.findOne({ email }).lean().exec((err, user) => {
            if (err) { return done(err, null); }
            if (!user) { return done('No user found.', null); }

            const encryptedPassword = bcrypt.hashSync(password, salt);
            let newUser = new User({
                email,
                password: encryptedPassword
            });

            newUser.save((error, inserted) => {
                if (error) {
                    return done(error, null);
                }
                delete inserted.password;
                return done(null, inserted);
            });
            if (!user.verifyPassword(password)) { return done(null, false) }
            return done(null, user);
        });
    }
);

module.exports = LoginStrategy;