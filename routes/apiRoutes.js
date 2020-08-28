const   express         = require('express'),
        router          = express.Router(),
        db              = require('../models/db');


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