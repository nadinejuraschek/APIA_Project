// NPM PACKAGES
require('dotenv').config();

const   express         = require('express'),
        mongoose        = require('mongoose'),
        morgan          = require('morgan'),
        path            = require('path'),
        jwt             = require('jsonwebtoken'),
        cookieParser    = require('cookie-parser'),
        cookieSession   = require('cookie-session'),
        passport        = require('./passport');

const   app             = express();

// IMPORT MODELS
const   db              = require('./models/db');

// MORGAN - HTTP REQUEST LOGGER
app.use(morgan('tiny'));

// DATABASE
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.');
});

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// AUTHENTICATION
app.use(passport.initialize());

// ROUTES

// SERVER
app.get('/api', (req, res) => {
    res.send('API route works');
    // res.json(data);
});

app.listen(process.env.PORT, function() {
    console.log('Server is listening on PORT ' + process.env.PORT + '.');
});