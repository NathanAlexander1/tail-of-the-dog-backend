const router = require('express').Router();
const userRoutes = require('./userController');
const dogBreedRoutes = require('./dogBreedController');
const cocktailIngredientListRoutes = require('./cocktailIngredientListController');

router.use('/users', userRoutes);
router.use('/dogbreeds', dogBreedRoutes);
router.use('/cocktailingredientlist', cocktailIngredientListRoutes);

module.exports = router;