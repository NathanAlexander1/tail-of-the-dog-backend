const router = require('express').Router();
const userRoutes = require('./userController');
const dogBreedRoutes = require('./dogBreedController');

router.use('/users', userRoutes);
router.use('/dogbreeds', dogBreedRoutes);

module.exports = router;