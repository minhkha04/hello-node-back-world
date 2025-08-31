import  FoodType  from '../models/foodType.js';
import { Sequelize } from "sequelize"

const Op = Sequelize.Op

const getFoodTypeAll = async (req, res) => {
    try {
        const foodTypes = await FoodType.findAll();
        res.status(200).send(foodTypes);
    } catch (error) {
        console.error("Error fetching food types:", error);
        res.status(500).send({ error: "Internal server error" });
    }
}

export { getFoodTypeAll };