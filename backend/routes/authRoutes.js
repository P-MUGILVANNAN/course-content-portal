const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const auth = require('../middleware/auth');
const upload = require('../middleware/multer');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/profile', auth, authController.getProfile);
router.put('/profile', auth, upload.single('profileImage'), authController.updateProfile);
router.get('/trainers',authController.getAllProfiles);
router.delete('/trainers/:id',authController.deleteTrainer);


module.exports = router;
