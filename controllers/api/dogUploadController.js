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

//Get all dogs Uploaded
router.get("/", async (req, res) => {
  try {
    const dogs = await Dog.findAll({
      include: [User,  { model: FullGuess, include: [DogGuess] }, DogGuess, { model: FullCocktail, include: [CocktailIngredient] }],
    });
    res.status(200).json(dogs);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "an error has occured", err });
  }
});

//get all public dogs
router.get("/public", async (req, res) => {
  try {
    const dogs = await Dog.findAll({
      where: {
        isPrivate: false,
      },
      include: [
        User, { model: FullGuess, include: [DogGuess] },
        { model: DogGuess, include: [User] }, { model: FullCocktail, include: [CocktailIngredient] }],
    });
    res.status(200).json(dogs);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "an error has occured", err });
  }
});

//get one dog Upload
router.get("/:id", async (req, res) => {
  try {
    const dogUpload = await Dog.findByPk(req.params.id, {
      include: [User,  { model: DogGuess, include: [User] }, { model: FullGuess, include: [DogGuess] }, { model: FullCocktail, include: [CocktailIngredient] }],
    });
    if (!dogUpload) {
      res.status(404).json({ message: "No uploaded dog found with that ID!" });
      return;
    }
    res.status(200).json(dogUpload);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get uploaded dogs by user id
router.get("/users/:userId/", async (req, res) => {
  try {
    const dogUpload = await Dog.findAll({
      where: {
        "$User.id$": req.params.userId,
      },
      include: [User, 
        { model: DogGuess, include: [User] }, { model: FullGuess, include: [DogGuess] }, { model: FullCocktail, include: [CocktailIngredient] }
      ],
    });
    if (!dogUpload) {
      res.status(404).json({ message: "No dog guess found with that ID!" });
      return;
    }
    res.status(200).json(dogUpload);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//upload a new dog
router.post("/", async (req, res) => {
  try {
    const dog = await Dog.create({
      name: req.body.name,
      dog_image: req.body.dog_image,
      isPrivate: req.body.isPrivate,
      UserId: req.body.UserId,
    });
    res.status(200).json(dog);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "The dog you are creating does not have a valid user ID associated with it",
    });
  }
});

//Update Uploaded Dog
router.put("/:id", async (req, res) => {
  try {
    const dog = await Dog.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(dog);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "Check that the uploaded dog you are editing has either a valid user id",
    });
  }
});

//delete dog
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const dog = await Dog.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(dog);
  } catch (err) {
    console.log({ msg: "There is no uploaded dog with that ID" });
  }
});
module.exports = router;
