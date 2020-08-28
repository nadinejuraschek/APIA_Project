// NPM PACKAGES
const express = require('express'),
  router = express.Router();

// CONTROLLER
const goalController = require('../controllers/goalController');

// READ
router.get('/user/:id/goals', goalController.getGoals);

router.get('/user/:id/goals/:goalid', goalController.getSingleGoal);

// CREATE
router.post('/goals', goalController.create);

// UPDATE
router.put('/goals/:goalid', goalController.update);

// DELETE
router.delete('/goals/:goalid', goalController.delete);

module.exports = router;