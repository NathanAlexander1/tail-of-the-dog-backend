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

module.exports = router;