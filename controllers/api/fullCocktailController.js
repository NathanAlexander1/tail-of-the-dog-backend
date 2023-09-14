const router = require("express").Router();
const {
  User,
  Dog,
  FullGuess,
  DogGuess,
  FullCocktail,
  CocktailIngredient,
  DogBreed,
  CocktailIngredientList,
} = require("../../models");

//Get all dog guesses
router.get("/", async (req, res) => {
    try {
      const fullCocktail = await FullCocktail.findAll({
        include: [CocktailIngredient, User, Dog],
      });
      res.status(200).json(fullCocktail);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "an error has occured", err });
    }
  });

  //get dog guesses by guess id
router.get("/:id", async (req, res) => {
    try {
      const fullCocktail = await FullCocktail.findByPk(req.params.id, {
        include: [CocktailIngredient, User, Dog],
      });
      if (!fullCocktail) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullCocktail);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //get dog guesses by guessed dog id
router.get("/dogs/:dogid", async (req, res) => {
    try {
      const fullCocktail = await FullCocktail.findAll({
        where: {
          "$fullCocktail.DogId$": req.params.dogid,
        },
        include: [CocktailIngredient, User, Dog],
      });
      if (!fullCocktail) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullCocktail);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //get all Full guesses by user id
router.get("/users/:userId/", async (req, res) => {
    try {
      const fullCocktail = await FullCocktail.findAll({
        where: {
          "$User.id$": req.params.userId,
        },
        include: [CocktailIngredient, User, Dog],
      });
      if (!fullCocktail) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullCocktail);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //get dog guesses ABOUT A CERTAIN DOG by A CERTAIN USER
router.get("/users/:userid/dogs/:dogid/", async (req, res) => {
    try {
      const fullCocktail = await FullCocktail.findAll({
        where: {
          "$fullCocktail.UserId$": req.params.userid,
          "$fullCocktail.DogId$": req.params.dogid,
        },
        include: [CocktailIngredient, User, Dog],
      });
      if (!fullCocktail) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullCocktail);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //Create a new fullCocktail
router.post("/", async (req, res) => {
    try {
      const fullCocktail = await FullCocktail.create({
        cocktailOwner: req.body.cocktailOwner,
        cocktailName: req.body.cocktailName,
        DogId: req.body.DogId,
        UserId: req.body.UserId,
      });
      res.status(200).json(fullCocktail);
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
      const fullCocktail = await FullCocktail.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json(fullCocktail);
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
      const fullCocktail = await FullCocktail.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json(fullCocktail);
    } catch (err) {
      console.log({ msg: "There is no dog guess with that ID" });
    }
  });
  

module.exports = router;