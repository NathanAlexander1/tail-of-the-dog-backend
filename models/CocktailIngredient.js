const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection.js");

class CocktailIngredient extends Model {}

CocktailIngredient.init(
    {
        ingredient_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          ingredient_percentage: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          // ingredient_to_dog_guess: {
          //   type: DataTypes.INTEGER,
          //   references: {
          //     model: "dogGuess",
          //     key: "id",
          //   },
          // },
    },
    {sequelize}
)

module.exports = CocktailIngredient;