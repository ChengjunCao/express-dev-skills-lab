var express = require('express');
var router = express.Router();
let skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill);
router.get('/:id/edit', skillsCtrl.edit);
router.get('/:id', skillsCtrl.detail);

router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);

module.exports = router;
