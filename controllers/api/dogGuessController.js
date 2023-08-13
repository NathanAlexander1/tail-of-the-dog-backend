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
    const dogGuesses = await DogGuess.findAll({
      include: [User, Dog, CocktailIngredient],
    });
    res.status(200).json(dogGuesses);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "an error has occured", err });
  }
});

//get dog guesses by id
router.get("/:id", async (req, res) => {
  try {
    const dogGuess = await DogGuess.findByPk(req.params.id, {
      include: [User, Dog, CocktailIngredient],
    });
    if (!dogGuess) {
      res.status(404).json({ message: "No dog guess found with that ID!" });
      return;
    }
    res.status(200).json(dogGuess);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get dog guesses by user id about a specific uploaded dog
router.get("/users/:id/", async (req, res) => {
  try {
    const dogGuess = await DogGuess.findAll({
      where: {
        $UserId$: req.params.id,
      },
    });
    if (!dogGuess) {
      res.status(404).json({ message: "No dog guess found with that ID!" });
      return;
    }
    res.status(200).json(dogGuess);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get dog guesses ABOUT A CERTAIN DOG by A CERTAIN USER
router.get("/users/:userid/dogs/:dogid/", async (req, res) => {
  try {
    const dogGuess = await DogGuess.findAll({
      where: {
        "$DogGuess.UserId$": req.params.userid,
        "$DogGuess.DogId$": req.params.dogid,
      },
    });
    if (!dogGuess) {
      res.status(404).json({ message: "No dog guess found with that ID!" });
      return;
    }
    res.status(200).json(dogGuess);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//upload a new dog
router.post("/", async (req, res) => {
  try {
    const dogGuess = await DogGuess.create({
      breed: req.body.breed,
      percentage: req.body.percentage,
      UserId: req.body.UserId,
      DogId: req.body.DogId,
    });
    res.status(200).json(dogGuess);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "The dog you are creating does not have a valid user ID associated with it",
    });
  }
});

//Update dog guess
router.put("/:id", async (req, res) => {
  try {
    const dogGuess = await DogGuess.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(dogGuess);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "Check that the dog guess you are editing has either a valid id",
    });
  }
});

//delete dog
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const dogGuess = await DogGuess.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(dogGuess);
  } catch (err) {
    console.log({ msg: "There is no dog guess with that ID" });
  }
});

module.exports = router;
