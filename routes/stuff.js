const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.get('/granit', stuffCtrl.getAllGranit);
router.get('/mermer', stuffCtrl.getAllMermer);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;
