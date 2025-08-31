import { Sequelize } from "sequelize"
import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"
import { successCode } from "../config/response.js"

const models = initModels(sequelize)

const Op = Sequelize.Op

const getFoodTypeAll = async (req, res) => {
    try {
        const foodTypes = await models.food_types.findAll({
            include: ["foods"]
        });
        successCode(res, foodTypes, "Fetch food types successfully");
    } catch (error) {
        console.error("Error fetching food types:", error);
        res.status(500).send({ error: "Internal server error" });
    }
}

export { getFoodTypeAll };