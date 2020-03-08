const   passport        = require('passport');

// import all passport strategies
const   loginStrategy   = require('./loginStrategy'),
        signupStrategy  = require('./signupStrategy');
// const GoogleStrategy = require('./googleStrategy');

passport.use('local-signin', loginStrategy);
passport.use('local-signup', signupStrategy);

module.exports = passport;