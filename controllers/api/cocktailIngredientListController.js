const express = require("express");
const router = express.Router();
const { CocktailIngredientList } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const cocktailIngredientList = await CocktailIngredientList.findAll();
      res.status(200).json(cocktailIngredientList);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "an error has occured", err });
    }
  });

  router.get("/randomcocktailingredient", async (req, res) => {

    let temp = []
    const cocktailIngredientArray = await CocktailIngredientList.findAll()
  
    cocktailIngredientArray.map(cocktailIngredient => {
      temp.push(router.get({ plain: true }).id)
    })
  
    const randomID = Math.floor(Math.random() * temp.length +1)
    console.log(randomID)
    CocktailIngredientList.findByPk(randomID
    ).then(randomCocktailIngredient => {
        res.json(randomCocktailIngredient)
    }).catch(err => {
        console.log(err);
        res.json({
            msg: "an error occurred",
            err,
        })
    })
})

router.get("/:id", (req, res) => {
  CocktailIngredientList.findByPk(req.params.id)
      .then((cocktailIngredientData) => {
        if (!cocktailIngredientData) {
          res.status(404).json({ message: 'No user found with that ID!' });
          return;
          } 
        res.status(200).json(cocktailIngredientData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({err});
      });
  });

module.exports = router;