const   express     = require('express'),
        router      = express.Router(),
        passport    = require('../passport');

// REGISTER with custom callback
router.post('/register', (req, res, next) => {

    // Custom Passport Callback
    passport.authenticate('local-signup', function( error, user, info ) {
        if (error) { 
            res.status(500).json({
                message: 'Something went wrong!',
                error: error.message
            });
        }

        return res.json(user);
    })(req, res, next);

});

// LOGIN user
router.post('/login', (req, res, next) => {

    // Custom Passport Callback
    passport.authenticate('local-signin', function( error, user, info ) {
        if (error) { 
            res.status(500).json({
                message: 'Something went wrong!',
                error: error.message
            });
        }

        return res.json(user);
    })(req, res, next);

});

module.exports = router;