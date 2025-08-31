import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _food_types from  "./food_types.js";
import _foods from  "./foods.js";

export default function initModels(sequelize) {
  const food_types = _food_types.init(sequelize, DataTypes);
  const foods = _foods.init(sequelize, DataTypes);

  foods.belongsTo(food_types, { as: "food_type", foreignKey: "food_type_id"});
  food_types.hasMany(foods, { as: "foods", foreignKey: "food_type_id"});

  return {
    food_types,
    foods,
  };
}
