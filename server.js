// NPM PACKAGES
require('dotenv').config();

const   express         = require('express'),
        app             = express(),
        mongoose        = require('mongoose'),
        passport        = require('passport'),
        LocalStrategy   = require('passport-local'),
        User            = require('./models/user');

// DATABASE
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PASSPORT CONFIG
app.use(require('express-session')({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// SERVER
app.listen(process.env.PORT, function() {
    console.log('Server is listening on PORT ' + process.env.PORT + '.');
});