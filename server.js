// NPM PACKAGES
require('dotenv').config();

const express = require('express'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  path = require('path'),
  jwt = require('jsonwebtoken'),
  cookieParser = require('cookie-parser'),
  noteRoutes = require('./routes/noteRoutes'),
  goalRoutes = require('./routes/goalRoutes'),
  paymentRoutes = require('./routes/paymentRoutes'),
  userRoutes = require('./routes/userRoutes');

const app = express();

// IMPORT MODELS
const db = require('./models/db');

// MORGAN - HTTP REQUEST LOGGER
app.use(morgan('tiny'));

// DATABASE
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected.');
});

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

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
});

// ROUTES
const apiRoutes = require('./routes/apiRoutes');
app.use(apiRoutes);
app.use('/api', noteRoutes);
app.use('/api', goalRoutes);
app.use('/api', paymentRoutes);
app.use('/api/user', userRoutes);

// DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// If no API routes are hit, send the React app
app.use((req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

// SERVER
app.listen(process.env.PORT, function () {
  console.log('Server is listening on PORT ' + process.env.PORT + '.');
});
