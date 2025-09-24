import express from 'express';
import authRoute from './auth.route.js';
import userRoute from './user.route.js';

const rootRouter = express.Router();

rootRouter.use('/auths', authRoute);
rootRouter.use('/users', userRoute);

export default rootRouter;

