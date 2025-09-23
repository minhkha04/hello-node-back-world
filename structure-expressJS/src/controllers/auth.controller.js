import { AuthService } from "../services/auth.service.js";
import { successResponse, errorResponse } from "../utils/response.util.js";

export const AuthController = {
    async login(req, res) {
        try {
            const { email, password, access_token } = req.body;
            const type = req.query.type;
            const result = await AuthService.login(email, password, access_token, type);
            return successResponse(res, result, "Login successful");
        } catch (err) {
            console.log(err);
            return errorResponse(res, err, err.statusCode);
        }
    },

    async register(req, res) {
        try {
            const { email, password } = req.body;
            const result = await AuthService.register(email, password);
            return successResponse(res, result, "Register successful");
        } catch (error) {
            console.log(error);
            return errorResponse(res, error, error.statusCode);
        }
    }
};
