import express from 'express';
import { validate } from '../middlewares/validate.middleware.js';
import { LoginRequest } from '../validators/auth.validator.js';
import { AuthController } from '../controllers/auth.controller.js';
import { clientInfo } from '../middlewares/client-info.middleware.js';

const authRoute = express.Router();

authRoute.post('/login', validate(LoginRequest), clientInfo, AuthController.login);
authRoute.post('/send-otp', AuthController.sendOtp);

export default authRoute;