const express = require("express");

const tutorials = require("../controllers/tutorials"); 

const router = express.Router();

router.get('/', tutorials.getTutorials);
// router.get('/:roll', tutorials.getspecStudent);
router.post('/', tutorials.createTutorial);
router.patch('/:roll', tutorials.updateTutorial);
router.delete('/:roll', tutorials.deleteTutorial);