import { Sequelize } from "sequelize"
import Food from "../models/food.js"

const Op = Sequelize.Op

const getFoodAll = async (req, res) => {
    try {
        const foods = await Food.findAll()
        res.status(200).send(foods)
    } catch (error) {
        console.error("Error fetching foods:", error)
        res.status(500).send({ error: "Internal server error" })
    }
}

const createFood = async (req, res) => {
    try {
        const newFood = await Food.create(req.body)
        res.status(201).send(newFood)
    } catch (error) {
        console.error("Error creating food:", error)
        res.status(500).send({ error: "Internal server error" })
    }
}

const updateFood = async (req, res) => {
    try {
        let { id, name, food_type_id } = req.body
        let foodUpdate = await Food.findOne({
            where: { id }
        })
        if (!foodUpdate) {
            res.status(404).send({ error: "Food not found" })
            return
        }

        Food.update(
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
    let foodUpdate = await Food.findOne({
        where: { id }
    })
    if (!foodUpdate) {
        res.status(404).send({ error: "Food not found" })
        return
    }
    Food.destroy({
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