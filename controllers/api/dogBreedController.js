const express = require("express");
const router = express.Router();
const { DogBreed } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const dogBreeds = await DogBreed.findAll();
      res.status(200).json(dogBreeds);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "an error has occured", err });
    }
  });

  router.get("/randomdogbreed", async (req, res) => {

    let temp = []
    const dogBreedArray = await DogBreed.findAll()
  
    dogBreedArray.map(dogBreed => {
      temp.push(router.get({ plain: true }).id)
    })
  
    const randomID = Math.floor(Math.random() * temp.length +1)
    console.log(randomID)
    DogBreed.findByPk(randomID
    ).then(randomDogBreed => {
        res.json(randomDogBreed)
    }).catch(err => {
        console.log(err);
        res.json({
            msg: "an error occurred",
            err,
        })
    })
})

router.get("/:id", (req, res) => {
    DogBreed.findByPk(req.params.id)
      .then((dogBreedData) => {
        if (!dogBreedData) {
          res.status(404).json({ message: 'No user found with that ID!' });
          return;
          } 
        res.status(200).json(dogBreedData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({err});
      });
  });

module.exports = router;