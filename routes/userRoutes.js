const express         = require('express'),
  router          = express.Router(),
  userController = require('../controllers/userController');

  // EDIT
router.put('/:id', userController.update);

module.exports = router;