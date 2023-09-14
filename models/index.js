const User = require('./User');
const Dog = require('./Dog');
const FullGuess = require('./FullGuess')
const DogGuess = require('./DogGuess');
const FullCocktail = require('./FullCocktail')

const CocktailIngredient = require('./CocktailIngredient');
const DogBreed = require('./DogBreed');
const CocktailIngredientList = require('./CocktailIngredientList');

User.hasMany(Dog);
Dog.belongsTo(User);

//this will come out
User.hasMany(DogGuess);
DogGuess.belongsTo(User);

//this will come out
Dog.hasMany(DogGuess);
DogGuess.belongsTo(Dog);

// ~~~~~~~~~~~~~~~~~~
User.hasMany(FullGuess);
FullGuess.belongsTo(User);

FullGuess.hasMany(DogGuess)
DogGuess.belongsTo(FullGuess);

Dog.hasMany(FullGuess);
FullGuess.belongsTo(Dog);

User.hasMany(FullCocktail);
FullCocktail.belongsTo(User);

Dog.hasMany(FullCocktail);
FullCocktail.belongsTo(Dog);

FullCocktail.hasMany(CocktailIngredient)
CocktailIngredient.belongsTo(FullCocktail);

// ~~~~~~~~~~~~~~~~~~~~~~~~~

DogGuess.hasOne(CocktailIngredient);
CocktailIngredient.belongsTo(DogGuess);

module.exports = {
    User,
    Dog,
    FullGuess,
    DogGuess,
    FullCocktail, 
    CocktailIngredient,
    DogBreed,
    CocktailIngredientList
  };