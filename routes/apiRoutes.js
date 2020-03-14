const   express     = require('express'),
        router      = express.Router(),
        db          = require('../models/db'),
        bcrypt      = require('bcryptjs'),
        jwt         = require('jsonwebtoken');

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
    familID: req.body.familyID,
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
router.get('/api/workhours', (req, res) => {
  db.User.findById(req.params.id).populate('workhours').then(function(data) {
    res.json(data);
  })
});
// POST WORKHOURS
router.post('/api/workhours', (req, res) => {
  db.Workhour.create(req.body).then(function(insertedWorkhours) {
    // console.log('User is: ' + req.user);
    db.User.findByIdAndUpdate({ _id: req.user }, { $push: { workhours: insertedWorkhours._id } }, function (error, success) {
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

// DELETE WORKHOURS
router.delete('/api/workhours/:workhourid', (req, res) => {
  db.Payment.findByIdAndRemove(req.params.workhourid).then(function(data) {
    res.json(data);
  });
});

// ==================================================
// PAYMENTS
// ==================================================
// GET PAYMENTS
router.get('/api/payments', (req, res) => {
  db.User.findById(req.params.id).populate('payments').then(function(data) {
    res.json(data);
  })
});
// POST PAYMENT
router.post('/api/payments', (req, res) => {
  db.Payment.create(req.body).then(function(insertedPayment) {
    // console.log('User is: ' + req.user);
    db.User.findByIdAndUpdate({ _id: req.user }, { $push: { payments: insertedPayment._id } }, function (error, success) {
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
// EDIT PAYMENT

// DELETE PAYMENT
router.delete('/api/payments/:paymentid', (req, res) => {
  db.Payment.findByIdAndRemove(req.params.paymentid).then(function(data) {
    res.json(data);
  });
});

// ==================================================
// GOALS
// ==================================================
// GET GOALS
router.get('/api/goals', (req, res) => {
  db.User.findById(req.params.id).populate('goals').then(function(data) {
    res.json(data);
  })
});
// POST GOAL
router.post('/api/goals', (req, res) => {
  db.Goal.create(req.body).then(function(insertedGoal) {
    // console.log('User is: ' + req.user);
    db.User.findByIdAndUpdate({ _id: req.user }, { $push: { goals: insertedGoal._id } }, function (error, success) {
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
// EDIT GOAL

// DELETE GOAL
router.delete('/api/goals/:goalid', (req, res) => {
  db.Goal.findByIdAndRemove(req.params.goalid).then(function(data) {
    res.json(data);
  });
});

// ==================================================
// NOTES
// ==================================================
// GET NOTES
router.get('/user/:id/notes', (req, res) => {
  db.User.findById(req.user).populate('notes').then(function(data) {
    res.json(data);
  })
});
// GET NOTE
router.get('/user/:id/notes/:noteid', (req, res) => {
  db.Note.findById(req.params.noteid).then(function(data) {
    res.json(data);
  });
});
// POST NOTE
router.post('/api/notes', (req, res) => {
  db.Note.create(req.body).then(function(insertedNote) {
    // console.log('User is: ' + req.user);
    db.User.findByIdAndUpdate({ _id: req.user }, { $push: { notes: insertedNote._id } }, function (error, success) {
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
// EDIT NOTE
router.put('/api/notes/:noteid', (req, res) => {
  db.Note.findByIdAndUpdate(req.params.noteid).then(function(data) {
    res.json(data);
  });
});
// DELETE NOTE
router.delete('/api/notes/:noteid', (req, res) => {
  db.Note.findByIdAndRemove(req.params.noteid).then(function(data) {
    res.json(data);
  });
});

module.exports = router;