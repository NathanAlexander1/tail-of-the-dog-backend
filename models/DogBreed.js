const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class DogBreed extends Model {}

DogBreed.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {sequelize}
)

module.exports = DogBreed;