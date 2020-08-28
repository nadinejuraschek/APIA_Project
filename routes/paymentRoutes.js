// NPM PACKAGES
const express = require('express'),
  router = express.Router();

// CONTROLLER
const paymentController = require('../controllers/paymentController');

// READ
router.get('/user/:id/payments', paymentController.getPayments);

// CREATE
router.post('/payments', paymentController.create);

// UPDATE
router.put('/payments/:paymentid', paymentController.update);

// DELETE
router.delete('/payments/:paymentid', paymentController.delete);

module.exports = router;