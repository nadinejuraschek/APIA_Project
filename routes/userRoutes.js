// NPM PACKAGES
const express = require('express'),
  router = express.Router();

// CONTROLLER
const userController = require('../controllers/userController');

// READ
router.get('/', userController.getUser);

router.get('/:id', userController.getUserById);

// CREATE
router.post('/register', userController.register);

router.post('/login', userController.login);

router.post('/signout', userController.signout);

// UPDATE
router.put('/:id', userController.update);

// DELETE
router.delete('/:id', userController.delete);

module.exports = router;