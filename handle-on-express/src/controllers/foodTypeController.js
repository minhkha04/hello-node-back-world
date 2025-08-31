import { Sequelize } from "sequelize"
import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"

const models = initModels(sequelize)

const Op = Sequelize.Op

const getFoodTypeAll = async (req, res) => {
    try {
        const foodTypes = await models.food_types.findAll({
            include: ["foods"]
        });
        res.status(200).send(foodTypes);
    } catch (error) {
        console.error("Error fetching food types:", error);
        res.status(500).send({ error: "Internal server error" });
    }
}

export { getFoodTypeAll };