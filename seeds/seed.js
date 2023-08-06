const sequelize = require("../config/connection");
const {
    User,
    Dog,
    DogGuess,
    CocktailIngredient,
  } = require("../models");

  const userData = [
    {
      name: "Jack Sparrow",
      email: "jack@sparrow.com",
      password: "Iamthecaptain",
    }
  ];

  const dogData = [
    {
        name: "Orlie",
        dog_image: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000",
        isPrivate: false,
        UserId: 1
    },
    {
        name: "Bailey",
        dog_image: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/69621513_2337136243170399_7896453289598779392_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=2VnOmQ3INO0AX_gfmpY&_nc_ht=scontent-lga3-1.xx&oh=00_AfC3w9HQhA55H9gaePl4GdXihJh4KzKl0HUJMuCXnPdqtg&oe=64F73114",
        isPrivate: true,
        UserId: 1
    },
  ]

  const dogGuessData = [
    {
        breed: "German Shephard",
        percentage: 47,
        DogId: 1,
        UserId: 1
    },
    {
        breed: "Chihuahua",
        percentage: 13,
        DogId: 1,
        UserId: 1
    },
    {
        breed: "American Cocker Spaniel",
        percentage: 40,
        DogId: 1,
        UserId: 1
    },
    {
        breed: "Austrailian Shephard",
        percentage: 100,
        DogId: 2,
        UserId: 1
    }
  ]

  const cocktailIngredientsData = [
    {
        ingredient_name: "Vodka",
        ingredient_percentage: 47,
        DogGuessId: 1
    },
    {
        ingredient_name: "Orange Juice",
        ingredient_percentage: 13,
        DogGuessId: 1
    },
    {
        ingredient_name: "Crankberry Juice",
        ingredient_percentage: 40,
        DogGuessId: 1
    },
    {
        ingredient_name: "Whiskey",
        ingredient_percentage: 100,
        DogGuessId: 2
    },
  ]

  const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    const dogs = await Dog.bulkCreate(dogData);
    const dogGuesses = await DogGuess.bulkCreate(dogGuessData);
    const cocktailIngredients = await CocktailIngredient.bulkCreate(cocktailIngredientsData);
  };

  seedDatabase();