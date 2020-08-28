const db = require('../models/db');

// EDIT
exports.update = async (req, res) => {
  db.User.findByIdAndUpdate({ _id: req.params.id })
    .then(updatedUser => {
      res.status(400).json(updatedUser);
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });
};