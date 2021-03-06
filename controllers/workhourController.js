// DATABASE
const db = require('../models/db'),
  moment = require('moment');

// READ
exports.getHours = async (req, res) => {
  await db.User.findById(req.user)
    .populate('workhours')
    .then(workhours => {
      res.status(200).json(workhours);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
exports.create = async (req, res) => {
  console.log("Req body: ", req.body);
  const { date, dateFormat, hours } = req.body;

  const workitem = await db.Workhour.findOne({ dateFormat: dateFormat});
  console.log(workitem);

  if (workitem === null) {
    await db.Workhour.create({
      date: date,
      dateFormat: moment(date).format('YY-MM-DD'),
      hours: hours,
      total: hours[0].duration,
    })
      .then(insertedWorkhour => {
        // console.log('User is: ' + req.user);
        db.User.findByIdAndUpdate(
          { _id: req.user },
          { $push: { workhours: insertedWorkhour._id } },
          (error, success) => {
            if (error) {
              console.log('Error: ' + error);
            } else {
              // TEST
              // console.log('Success: ' + success);
              res.json('Success!');
            }
          }
        );
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  } else {
    const newTotal = workitem.total + hours[0].duration;
    // TEST
    // console.log(newTotal);
    await db.Workhour.findOneAndUpdate(
      { date: date },
      { total: newTotal, $push: { hours: hours } },
      )
      .then(updatedWorkhour => {
        res.status(200).json(updatedWorkhour);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    await db.Workhour.findOneAndUpdate
  };
};

// UPDATE
exports.update = async (req, res) => {
  await db.Workhour.findByIdAndUpdate(
    { _id: req.params.workhourid },
    { $push: { hours: req.body } }
    )
    .then(updatedWorkhour => {
      res.status(200).json(updatedWorkhour);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
exports.delete = async (req, res) => {
  await db.Workhour.findByIdAndRemove(req.params.workhourid)
    .then(deletedWorkhour => {
      res
        .status(200)
        .json({ message: 'Workhours have been deleted successfully!' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
