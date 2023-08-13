const router = require('express').Router();
const userRoutes = require('./userController');
const dogUploadRoutes = require('./dogUploadController');
const dogGuessRoutes = require('./dogGuessController');
const cocktailIngredientRoutes = require('./cocktailIngredientController');
const dogBreedRoutes = require('./dogBreedController');
const cocktailIngredientListRoutes = require('./cocktailIngredientListController');

router.use('/users', userRoutes);
router.use('/dogs', dogUploadRoutes);
router.use('/dogguesses', dogGuessRoutes);
router.use('/cocktailingredients', cocktailIngredientRoutes);
router.use('/dogbreeds', dogBreedRoutes);
router.use('/cocktailingredientlist', cocktailIngredientListRoutes);

module.exports = router;