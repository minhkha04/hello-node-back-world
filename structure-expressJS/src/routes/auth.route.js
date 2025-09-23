import express from 'express';
import { validate } from '../middlewares/validate.middleware.js';
import { LoginRequest } from '../validators/auth.validator.js';
import { AuthController } from '../controllers/auth.controller.js';

const authRoute = express.Router();

authRoute.post('/login', validate(LoginRequest), AuthController.login);

export default authRoute;