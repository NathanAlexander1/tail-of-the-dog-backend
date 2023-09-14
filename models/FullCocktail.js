const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class FullCocktail extends Model {}

FullCocktail.init(
    {
        cocktailOwner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cocktailName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {sequelize}
)

module.exports = FullCocktail;