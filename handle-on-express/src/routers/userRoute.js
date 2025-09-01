import express from 'express'
import { createUser, login } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post("/sign-up", createUser)

userRouter.post("/sign-in", login)

export default userRouter