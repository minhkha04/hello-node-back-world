import express from 'express'
import foodRouter from './foodRoute.js';
import foodTypeRouter from './foodTypeRoute.js';

const rootRouter = express.Router();

rootRouter.use("/food", foodRouter)
rootRouter.use("/food-types", foodTypeRouter);

export default rootRouter;