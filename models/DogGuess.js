const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection.js");

class DogGuess extends Model {}

DogGuess.init(
    {
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // ingredient: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
        // dog_guess_for: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: "dog",
        //       key: "id",
        //     },
        //   },
        //   dog_guess_user: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: "user",
        //       key: "id",
        //     },
        //   },
    },
    {sequelize}
)

module.exports = DogGuess;