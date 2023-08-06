const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection.js");

class Dog extends Model {}

Dog.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dog_image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          isPrivate: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
          },
        //   dog_owner: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: "user",
        //       key: "id",
        //     },
        //   },
    },
    {sequelize}
)

module.exports = Dog;