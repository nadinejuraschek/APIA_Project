const   db = require('../models/db');

exports.getNotes = (req, res) => {
    db.User.findById(req.user).populate('notes').then(function(data) {
      res.json(data);
    });
};

exports.getSingleNote = (req, res) => {
    db.Note.findById(req.params.noteid).then(function(data) {
      res.json(data);
    });
};

exports.postNote = (req, res) => {
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
};

exports.editNote = (req, res) => {
    db.Note.findByIdAndUpdate(req.params.noteid, req.body).then(function(data) {
      res.json(data);
    })
};

exports.deleteNote = (req, res) => {
    db.Note.findByIdAndRemove(req.params.noteid).then(function(data) {
      res.json(data);
    });
};