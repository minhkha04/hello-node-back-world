import { Sequelize } from "sequelize"
import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"
import { errorCode, failCode, successCode } from "../config/response.js"
import bcrypt from "bcrypt"
import { generateToken } from "../config/jwt.js"
// yarn add bcrypt libaries hash password

const models = initModels(sequelize)

const Op = Sequelize.Op

const createUser = async (req, res) => {
    let { username, password, role } = req.body

    try {
        let userExist = await models.users.findOne({
            where: { username }
        })

        if (userExist) {
            failCode(res, "Username already exists")
            return
        }

        let newUser = await models.users.create({
            username, password: bcrypt.hashSync(password, 10), role
        })
        let userResponse = {...newUser.dataValues, password: undefined}
        successCode(res, userResponse, "User created successfully")

    } catch (error) {
        console.error("Error creating user:", error)
        errorCode(res, "Internal server error")
    }
}

const login = async (req, res) => {
    let { username, password } = req.body
    
    try {
        const user = await models.users.findOne({
            where: { username }
        })
        if (user) {
            const passwordMatch = bcrypt.compareSync(password, user.password)
            if (!passwordMatch) {
                failCode(res, "Invalid username or password")
                return
            }
            let token = generateToken({
                sub: user.id, 
                scope: user.role,
                username: user.username
            })

            successCode(res, token, "Login successful")
        } else {
            failCode(res, "Invalid username or password")
        }
    } catch {
        errorCode(res, "Internal server error")
    }
}

export { createUser, login }