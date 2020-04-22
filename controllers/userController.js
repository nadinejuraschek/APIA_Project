const   db          = require('../models/db'),
        bcrypt      = require('bcryptjs'),
        jwt         = require('jsonwebtoken');


exports.login = async function (req, res) {
    console.log(req.body);
    const user = await db.User.findOne({ email: req.body.email });
    if (!user) {
      res.json({message: 'No User found.'});
      return;
    };
    console.log(user);
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      res.json({message: 'Entered e-mail and password do not match!'});
      return;
    };
    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    res.json(user);
};

exports.register = async function (req, res) {
    console.log(req.body);
    req.body.email = req.body.email.toLowerCase();
    //has the password
    const password = await bcrypt.hash(req.body.password, 10);
    //create user in database
    const user = await db.User.create({
      role: req.body.role,
      familyID: req.body.familyID,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      country: req.body.country,
      email: req.body.email,
      password: password
    });
    //create cookie for user 
    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    console.log("\n\n\n\n\n\n\n\n\n", user);
    res.json(user);
};

exports.signout = function(req, res) {
    res.clearCookie('token');
    res.json('User is signed out.');
};