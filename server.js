// NPM PACKAGES
require('dotenv').config();

const   express         = require('express'),
        mongoose        = require('mongoose'),
        morgan          = require('morgan'),
        path            = require('path'),
        User            = require('./models/user');

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVER
app.get('/api', (req, res) => {
    res.send('API route works');
    // res.json(data);
});

app.listen(process.env.PORT, function() {
    console.log('Server is listening on PORT ' + process.env.PORT + '.');
});