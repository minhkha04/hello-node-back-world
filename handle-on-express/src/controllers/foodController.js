import { Sequelize } from "sequelize"
import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"
import { errorCode, successCode } from "../config/response.js"

const models = initModels(sequelize)

const Op = Sequelize.Op

const getFoodAll = async (req, res) => {
    try {
        const data = await models.foods.findAll({
            include: ["food_type"]
        })
        successCode(res, data, "Fetch foods successfully")
    } catch (error) {
        console.error("Error fetching foods:", error)
        errorCode(res, "Internal server error")
    }
}

const createFood = async (req, res) => {
    try {
        const newFood = await models.foods.create(req.body)
        successCode(res, newFood, "Food created successfully")
    } catch (error) {
        console.error("Error creating food:", error)
        errorCode(res, "Internal server error")
    }
}

const updateFood = async (req, res) => {
    try {
        let { id, name, food_type_id } = req.body
        let foodUpdate = await models.foods.findOne({
            where: { id }
        })
        if (!foodUpdate) {
            errorCode(res, "Food not found")
            return
        }

        await models.foods.update(
            { name, food_type_id },
            { where: { id } }
        )
        successCode(res, { id, name, food_type_id }, "Food updated successfully")

    } catch (error) {
        console.error("Error updating food:", error)
        errorCode(res, "Internal server error")
    }
}

const deleteFood = async (req, res) => {
    let { id } = req.params
    let foodUpdate = await models.foods.findOne({
        where: { id }
    })
    if (!foodUpdate) {
        errorCode(res, "Food not found")
        return
    }
    models.foods.destroy({
        where: { id }
    })
    successCode(res, null, "Food deleted successfully")
}

const getFoodWithPaging = async (req, res) => {
    let { page, pageSize } = req.params
    let index = (page - 1) * pageSize

    let data = await models.foods.findAll({
        offset: index,
        limit: pageSize*1
    })

    successCode(res, data, "Fetch foods with paging successfully")
}


export {
    getFoodAll,
    createFood,
    updateFood,
    deleteFood,
    getFoodWithPaging
}