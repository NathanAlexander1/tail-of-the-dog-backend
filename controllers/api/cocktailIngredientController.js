const router = require("express").Router();
const {
  User,
  Dog,
  DogGuess,
  CocktailIngredient,
  DogBreed,
  CocktailIngredientList,
} = require("../../models");

//Get all dog guesses
router.get("/", async (req, res) => {
  try {
    const cocktailIngredient = await CocktailIngredient.findAll({
      include: [DogGuess],
    });
    res.status(200).json(cocktailIngredient);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "an error has occured", err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cocktailIngredient = await CocktailIngredient.findByPk(req.params.id, {
      include: [DogGuess],
    });
    if (!cocktailIngredient) {
      res.status(404).json({ message: "No cocktail ingredient from dog guess found with that ID!" });
      return;
    }
    res.status(200).json(cocktailIngredient);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const cocktailIngredient = await CocktailIngredient.create({
      ingredient_name: req.body.ingredient_name,
      ingredient_percentage: req.body.ingredient_percentage,
      DogGuessId: req.body.DogGuessId,
    });
    res.status(200).json(cocktailIngredient);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "The cocktailIngredient you are creating does not have a valid dog guess associated with it",
    });
  }
});

//Update Uploaded cocktail ingredient
router.put("/:id", async (req, res) => {
  try {
    const cocktailIngredient = await CocktailIngredient.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(cocktailIngredient);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "Check that the cocktail ingredient you are editing has either a valid user id",
    });
  }
});

//delete cocktail ingredient
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const cocktailIngredient = await CocktailIngredient.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(cocktailIngredient);
  } catch (err) {
    console.log({ msg: "There is no cocktail ingredient from a dog guess with that ID" });
  }
});

module.exports = router;
