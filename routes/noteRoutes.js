// NPM PACKAGES
const express = require('express'),
  router = express.Router();

// CONTROLLER
const noteController = require('../controllers/noteController');

// READ
router.get('/user/:id/notes', noteController.getNotes);

router.get('/user/:id/notes/:noteid', noteController.getSingleNote);

// CREATE
router.post('/notes', noteController.create);

// UPDATE
router.put('/notes/:noteid', noteController.update);

// DELETE
router.delete('/notes/:noteid', noteController.delete);

module.exports = router;