import express from 'express'
import foodRouter from './foodRoute.js';
import foodTypeRouter from './foodTypeRoute.js';
import userRouter from './userRoute.js';

const rootRouter = express.Router();

rootRouter.use("/food", foodRouter)
rootRouter.use("/food-types", foodTypeRouter);
rootRouter.use("/users", userRouter);

export default rootRouter;