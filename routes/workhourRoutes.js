// NPM PACKAGES
const express = require('express'),
  router = express.Router();

// CONTROLLER
const workhourController = require('../controllers/workhourController');

// READ
router.get('/user/:id/workhours', workhourController.getHours);

// CREATE
router.post('/workhours', workhourController.create);

// UPDATE
router.put('/workhours/:workhourid', workhourController.update);

// DELETE
router.delete('/workhours/:workhourid', workhourController.delete);

module.exports = router;