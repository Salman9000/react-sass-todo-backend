const express = require("express");

const tutorials = require("../controllers/tutorials"); 

const router = express.Router();

router.get('/', tutorials.getAll);
router.get('/:id', tutorials.get);
router.post('/create', tutorials.create);
router.put('/update/:id', tutorials.update);
router.delete('/remove/:id', tutorials.remove);
router.delete('/removeAll', tutorials.removeAll);


module.exports = router;
// router.get('/:roll', tutorials.getspecStudent);
// router.post('/', tutorials.createTutorial);

// router.delete('/:roll', tutorials.deleteTutorial);