import epxress from 'express'
import { getFoodTypeAll } from '../controllers/foodTypeController.js'

const foodTypeRouter = epxress.Router()

foodTypeRouter.get("", getFoodTypeAll)

export default foodTypeRouter