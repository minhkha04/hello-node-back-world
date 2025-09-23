import express from 'express';
import authRoute from './auth.route.js';

const rootRouter = express.Router();

rootRouter.use('/auths', authRoute);

export default rootRouter;

