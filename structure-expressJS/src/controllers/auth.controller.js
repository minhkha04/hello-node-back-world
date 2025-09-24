import { AuthService } from "../services/auth.service.js";
import { successResponse } from "../utils/response.util.js";

export const AuthController = {
    async login(req, res) {
        const { email, password, token_third_party } = req.body;
        const type = req.query.type;
        const ip = req.clientIp;
        const device = req.device;
        const result = await AuthService.login(email, password, token_third_party, type, ip, device);
        return successResponse(res, result, "Login successful");
    },

    async register(req, res) {
        const { email, password } = req.body;
        const result = await AuthService.register(email, password);
        return successResponse(res, result, "Register successful");
    },

    async sendOtp(req, res) {
        const { email } = req.body;
        const { type } = req.query;
        await AuthService.sendOtp(email, type);
        return successResponse(res, null, "OTP sent successfully");
    }
};
