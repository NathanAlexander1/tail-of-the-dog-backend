const User = require('./User');
const Dog = require('./Dog');
const DogGuess = require('./DogGuess');
const CocktailIngredient = require('./CocktailIngredient');
const DogBreed = require('./DogBreed');

User.hasMany(Dog);
Dog.belongsTo(User);

User.hasMany(DogGuess);
DogGuess.belongsTo(User);

Dog.hasMany(DogGuess);
DogGuess.belongsTo(Dog);

DogGuess.hasOne(CocktailIngredient);
CocktailIngredient.belongsTo(DogGuess);

module.exports = {
    User,
    Dog,
    DogGuess,
    CocktailIngredient,
    DogBreed
  };