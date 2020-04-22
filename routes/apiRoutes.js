const   express         = require('express'),
        router          = express.Router(),
        userController  = require('../controllers/userController');
        db              = require('../models/db');
        // bcrypt          = require('bcryptjs'),
        // jwt             = require('jsonwebtoken');

// ==================================================
// USER
// ==================================================
// REGISTER USER
router.post('/api/user/register', userController.register);
// LOGIN USER
router.post('/api/user/login', userController.login);
// SIGNOUT USER
router.post('/api/user/signout', userController.signout);

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

// ==================================================
// PAYMENTS
// ==================================================
// GET PAYMENTS
router.get('/user/:id/payments', (req, res) => {
  db.User.findById(req.user).populate('payments').then(function(data) {
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
router.put('/api/payments/:paymentid', (req, res) => {
  db.Payment.findByIdAndUpdate(req.params.paymentid, req.body).then(function(data) {
    res.json(data);
    console.log(data);
  })
});
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
router.get('/user/:id/goals', (req, res) => {
  db.User.findById(req.user).populate('goals').then(function(data) {
    res.json(data);
  })
});
// GET GOAL
router.get('/user/:id/goals/:goalid', (req, res) => {
  db.Goal.findById(req.params.goalId).then(function(data) {
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
router.put('/api/goals/:goalid', (req, res) => {
  db.Goal.findByIdAndUpdate(req.params.goalid, req.body).then(function(data) {
    res.json(data);
  })
});
// CHECK GOAL
// router.put('api/goals/:goalid/check', (req, res) => {
//   db.Goal.findByIdAndUpdate(req.params.goalid, { $set: { 'checked' : req.body} }).then(function(data) {
//     res.json(data);
//   })
// });
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
  db.Note.findByIdAndUpdate(req.params.noteid, req.body).then(function(data) {
    res.json(data);
  })
});
// DELETE NOTE
router.delete('/api/notes/:noteid', (req, res) => {
  db.Note.findByIdAndRemove(req.params.noteid).then(function(data) {
    res.json(data);
  });
});

module.exports = router;