import express from 'express';
import { login } from '../controllers/auth/auth.controller.js';
import { validateBody } from '../middlewares/validate.js';
import { authJoiSchema } from '../schemas/auth/auth.schema.js';

const authRouter = express.Router();

authRouter.post("/login", validateBody(authJoiSchema), login);

export default authRouter;