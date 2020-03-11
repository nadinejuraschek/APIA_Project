// NPM PACKAGES
require('dotenv').config();

const   express         = require('express'),
        mongoose        = require('mongoose'),
        morgan          = require('morgan'),
        path            = require('path'),
        jwt             = require('jsonwebtoken'),
        cookieParser    = require('cookie-parser');

const   app             = express();

// IMPORT MODELS
const   db              = require('./models/db');

// MORGAN - HTTP REQUEST LOGGER
app.use(morgan('tiny'));

// DATABASE
mongoose.connect('mongodb://localhost:27017/apia', { 
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
//decode the jwt token
app.use((req, res, next) => {
    //destructure the token
    const { token } = req.cookies;
    //if the token exists
  
    console.log('token', token);
  
    if (token) {
      //get the verified userID from jwt
      const { id } = jwt.verify(token, process.env.APP_SECRET);
      //set that  userId on the request object 
  
      req.user = id;
    }
    //carry on the request after the middleware
    next();
  })

// ROUTES
const apiRoutes = require('./routes/apiRoutes');
app.use(apiRoutes);

// SERVER
app.get('/api', (req, res) => {
    res.send('API route works');
    // res.json(data);
});

app.listen(process.env.PORT, function() {
    console.log('Server is listening on PORT ' + process.env.PORT + '.');
});