const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class FullGuess extends Model {}

FullGuess.init(
    {
        guesserName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        guesserLocation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dogName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {sequelize}
)

module.exports = FullGuess;