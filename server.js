// NPM PACKAGES
require('dotenv').config();

const   express     = require('express'),
        app         = express(),
        mongoose    = require('mongoose');

app.listen(process.env.PORT, function() {
    console.log('Server is listening on PORT ' + process.env.PORT + '.');
});