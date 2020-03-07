const   express     = require('express'),
        router      = express.Router(),
        db          = require('../models/db');

router.get('/user/:id', (req, res) => {
    
  User.find({ id: req.params.id })
    .then((data) => {
      console.log('User data: ' + data);
      res.json(data);
    })
    .catch((err) => {
      console.log('User error: ' + err);
    });

});

router.get('/user/:id/workHours', async (req, res) => {
    try {
    res.status(200).json(data);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
});

router.get('/user/:id/payment', async (req, res) => {
    try {
    res.status(200).json(data);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
});

router.get('/user/:id/goals', async (req, res) => {
    try {
    res.status(200).json(data);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
});

router.get('/user/:id/notes', async (req, res) => {
    try {
    res.status(200).json(data);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
});

router.get('/user/:id/diary', async (req, res) => {
    try {
    res.status(200).json(data);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
});

module.exports = router;