const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_cooking_time_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_cooking_time_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_serves: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipe_ingredients: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    recipe_method: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    recipe_likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    recipe_spice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipe_veg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipe_fish: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipe_shellfish: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipe_ingredients_tags: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    recipe_cuisine: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
