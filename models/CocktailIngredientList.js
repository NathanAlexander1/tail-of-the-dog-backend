const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class CocktailIngredientList extends Model {}

CocktailIngredientList.init(
    {
        ingredientName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        containsAlcohol: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    },
    {sequelize}
)

module.exports = CocktailIngredientList;