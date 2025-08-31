import { Model, DataTypes } from "sequelize";
import sequelize from "./index.js";
import FoodType from "./foodType.js";

class Food extends Model {}

Food.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    food_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: sequelize,
    modelName: "Food",
    tableName: "foods",
    timestamps: false,
})

Food.belongsTo(FoodType, { foreignKey: "food_type_id" });
FoodType.hasMany(Food, { foreignKey: "food_type_id" });

export default Food;