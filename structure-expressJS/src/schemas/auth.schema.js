import JoiToSwagger from 'joi-to-swagger';
import { LoginRequest } from '../validators/auth.validator.js'; 

const { swagger: LoginRequestSchema } = JoiToSwagger(LoginRequest);

export const authSchemas = {
    LoginRequest: LoginRequestSchema,
};
