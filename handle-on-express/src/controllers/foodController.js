import { Sequelize } from "sequelize"
import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"

const models = initModels(sequelize)

const Op = Sequelize.Op

const getFoodAll = async (req, res) => {
    try {
        const data = await models.foods.findAll({
            include: ["food_type"]
        })
        res.status(200).send(data)
    } catch (error) {
        console.error("Error fetching foods:", error)
        res.status(500).send({ error: "Internal server error" })
    }
}

const createFood = async (req, res) => {
    try {
        const newFood = await models.foods.create(req.body)
        res.status(201).send(newFood)
    } catch (error) {
        console.error("Error creating food:", error)
        res.status(500).send({ error: "Internal server error" })
    }
}

const updateFood = async (req, res) => {
    try {
        let { id, name, food_type_id } = req.body
        let foodUpdate = await models.foods.findOne({
            where: { id }
        })
        if (!foodUpdate) {
            res.status(404).send({ error: "Food not found" })
            return
        }

        await models.foods.update(
            { name, food_type_id },
            { where: { id } }
        )
        res.status(200).send({ message: "Food updated successfully" })

    } catch (error) {
        console.error("Error updating food:", error)
        res.status(500).send({ error: "Internal server error" })
    }
}

const deleteFood = async (req, res) => {
    let { id } = req.params
    let foodUpdate = await models.foods.findOne({
        where: { id }
    })
    if (!foodUpdate) {
        res.status(404).send({ error: "Food not found" })
        return
    }
    models.foods.destroy({
        where: { id }
    })

    res.status(200).send({ message: "Food deleted successfully" })
}

export {
    getFoodAll,
    createFood,
    updateFood,
    deleteFood
}