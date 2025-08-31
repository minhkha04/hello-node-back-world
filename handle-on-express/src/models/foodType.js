import { Model, DataTypes } from "sequelize";
import sequelize from "./index.js";
import Food from "./food.js";

class FoodType extends Model {}

FoodType.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "FoodType",
    tableName: "food_types",
    timestamps: false
})



export default FoodType;