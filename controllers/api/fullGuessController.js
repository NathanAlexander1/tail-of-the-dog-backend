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
      const fullGuesses = await FullGuess.findAll({
        include: [User, DogGuess, Dog],
      });
      res.status(200).json(fullGuesses);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "an error has occured", err });
    }
  });

  //get dog guesses by guess id
router.get("/:id", async (req, res) => {
    try {
      const fullGuess = await FullGuess.findByPk(req.params.id, {
        include: [User, DogGuess, Dog],
      });
      if (!fullGuess) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullGuess);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //get dog guesses by guessed dog id
router.get("/dogs/:dogid", async (req, res) => {
    try {
      const fullGuess = await FullGuess.findAll({
        where: {
          "$fullGuess.DogId$": req.params.dogid,
        },
        include: [User, DogGuess, Dog],
      });
      if (!fullGuess) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullGuess);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //get all Full guesses by user id
router.get("/users/:userId/", async (req, res) => {
    try {
      const fullGuess = await FullGuess.findAll({
        where: {
          "$User.id$": req.params.userId,
        },
        include: [User, DogGuess, Dog],
      });
      if (!fullGuess) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullGuess);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //get dog guesses ABOUT A CERTAIN DOG by A CERTAIN USER
router.get("/users/:userid/dogs/:dogid/", async (req, res) => {
    try {
      const fullGuess = await FullGuess.findAll({
        where: {
          "$fullGuess.UserId$": req.params.userid,
          "$fullGuess.DogId$": req.params.dogid,
        },
        include: [User, DogGuess, Dog],
      });
      if (!fullGuess) {
        res.status(404).json({ message: "No dog guess found with that ID!" });
        return;
      }
      res.status(200).json(fullGuess);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //Create a new FullGuess
router.post("/", async (req, res) => {
    try {
      const fullGuess = await FullGuess.create({
        guesserName: req.body.guesserName,
        guesserLocation: req.body.guesserLocation,
        dogName: req.body.dogName,
        UserId: req.body.UserId,
        DogId: req.body.DogId,
      });
      res.status(200).json(fullGuess);
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
      const fullGuess = await FullGuess.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json(fullGuess);
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
      const fullGuess = await FullGuess.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json(fullGuess);
    } catch (err) {
      console.log({ msg: "There is no dog guess with that ID" });
    }
  });
  

module.exports = router;
