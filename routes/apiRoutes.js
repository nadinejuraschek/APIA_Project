const   express         = require('express'),
        router          = express.Router(),
        db              = require('../models/db');
        bcrypt          = require('bcryptjs'),
        moment          = require('moment'),
        jwt             = require('jsonwebtoken');

// ==================================================
// USER
// ==================================================
// CREATE USER
router.post("/api/users", function (req, res) {
  db.User.create(req.body).then(function (apia) {
    res.json(apia);
  });
});
// GET USER
router.get('/api/user', function (req, res) {
  // console.log('User ID: ' + req.user);
  db.User.findById((req.user), function(err, user) {
    res.json(user);
  });
});
router.get('/api/user/:id', (req, res) => {
  db.User.findById({ _id: req.params.id })
    .then((user) => {
      console.log('User data: ' + user);
      res.json(user);
    })
    .catch((err) => {
      console.log('User error: ' + err);
    });
});
// REGISTER USER
router.post('/api/user/register', async function (req, res) {
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
    startDate: req.body.startDate,
    endDate: moment(req.body.startDate).add(1, 'years'),
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
});
// LOGIN USER
router.post('/api/user/login', async function (req, res) {
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
});
// SIGNOUT USER
router.post('/api/user/signout', function(req, res) {
  res.clearCookie('token');
  res.json('User is signed out.');
});

// ==================================================
// WORKHOURS
// ==================================================
// GET WORKHOURS
router.get('/user/:id/workhours', (req, res) => {
  db.User.findById(req.user).populate('workhours').then(function(data) {
    res.json(data);
  })
});
// GET WEEK
router.get('/api/workhours/:workhourid', (req, res) => {
  db.WorkHour.findById(req.params.workhourid).then(function(data) {
    res.json(data);
  })
});
// POST WEEK
router.post('/api/workhours', (req, res) => {
  db.WorkHour.create(req.body).then(function(insertedHours) {
    // console.log('User is: ' + req.user);
    console.log('Workhour body: ' + req.body);
    db.User.findByIdAndUpdate({ _id: req.user }, { $push: { workhours: insertedHours._id } }, function (error, success) {
      if (error) {
          console.log('Error: ' + error);
      } else {
          // TEST
          // console.log('Success: ' + success);
          res.json('Success!');
      };
    });
    // res.json(data);
  });
});
// EDIT WORKHOURS
router.put('/api/workhours/:workhourid', (req, res) => {
  db.WorkHour.findByIdAndUpdate(req.params.workhourid, req.body).then(function(data) {
    res.json(data);
  })
});
// DELETE WORKHOURS
router.delete('/api/workhours/:workhourid', (req, res) => {
  db.WorkHour.findByIdAndRemove(req.params.workhourid).then(function(data) {
    res.json(data);
  });
});
// ==================================================
// WORKDAY
// ==================================================
// GET WORKDAY
router.get('/api/workhours/:workhourid', (req, res) => {
  db.WorkHour.findById(req.params.workhourid).populate('day').then(function(data) {
    res.json(data);
  })
});
// POST WORKDAY
router.post('/api/day', (req, res) => {
  db.Day.create(req.body).then(function(insertedDay) {
    // console.log('User is: ' + req.user);
    db.User.findByIdAndUpdate({ _id: req.user }, { $push: { day: insertedDay._id } }, function (error, success) {
      if (error) {
          console.log('Error: ' + error);
      } else {
          // TEST
          // console.log('Success: ' + success);
          res.json('Success!');
      };
    });
    // res.json(data);
  });
});
// EDIT WORKDAY
router.put('/api/day/:dayid', (req, res) => {
  db.Day.findByIdAndUpdate(req.params.dayid, req.body).then(function(data) {
    res.json(data);
  })
});
// DELETE WORKDAY
router.delete('/api/day/:dayid', (req, res) => {
  db.Day.findByIdAndRemove(req.params.dayid).then(function(data) {
    res.json(data);
  });
});

module.exports = router;