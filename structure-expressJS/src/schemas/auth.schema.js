import JoiToSwagger from 'joi-to-swagger';
import { LoginRequest, SendOtpRequest } from '../validators/auth.validator.js'; 

const { swagger: LoginRequestSchema } = JoiToSwagger(LoginRequest);
const { swagger: SendOtpRequestSchema } = JoiToSwagger(SendOtpRequest);

export const authSchemas = {
    LoginRequest: LoginRequestSchema,
    SendOtpRequest: SendOtpRequestSchema,
};
