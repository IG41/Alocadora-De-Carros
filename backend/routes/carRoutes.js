const express = require('express');
const router = express.Router();
const { getCars, addCar } = require('../controllers/carController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getCars);
router.post('/', adminMiddleware, addCar);

module.exports = router;
