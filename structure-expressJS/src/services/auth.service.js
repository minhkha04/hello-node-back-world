import { BaseError } from "../utils/base-error.util.js";
import { ACCOUNT_TYPE } from "../contants/account-type.contant.js";
import { UserRepository } from "../repositories/user.repository.js";
import { jwtUtils } from "../utils/jwt.util.js";
import { refreshTokenService } from "./refresh-token.sevice.js";
import { compare } from "../utils/bcrypt.util.js";
import { OtpService } from "./otp.service.js";
import { sendMail } from "./mail.service.js";

export const AuthService = {
    async login(email, password, token_third_party, type, ip, device) {
        switch (type) {
            case ACCOUNT_TYPE.LOCAL:
                if (!email || !password) {
                    throw new BaseError(400, "Email and password are required");
                }
                break;
            case ACCOUNT_TYPE.GOOGLE:
            case ACCOUNT_TYPE.FACEBOOK:
                if (!token_third_party) {
                    throw new BaseError(400, "Access token is required");
                }
                throw new BaseError(500, "Third-party login not implemented");
            default:
                throw new BaseError(400, "Invalid account type");
        }

        const user = await UserRepository.findUserByEmail(email, type);
        if (!user) {
            throw new BaseError(404, "User not found");
        }
        if (!user.isActive) {
            throw new BaseError(403, "User account is not active");
        }
        if (type === ACCOUNT_TYPE.LOCAL && !await compare(password, user.password)) {
            throw new BaseError(401, "Invalid password");
        }
        const access_token = jwtUtils.signAccessToken(user);
        const refresh_token = await refreshTokenService.generate(user, ip, device);
        return {
            access_token: access_token,
            refersh_token: refresh_token
        };
    },

    async register(email, password) {
        const existingUser = await UserRepository.findUserByEmail(email, ACCOUNT_TYPE.LOCAL);
        if (existingUser) {
            throw new BaseError(400, "Email already in use");
        }
        await UserRepository.createUser({ email, password, accout_type: ACCOUNT_TYPE.LOCAL });
        return {
            token: 'dummy-jwt-token',
            access_token: 'dummy-access-token'
        };
    },

    async sendOtp(email, type) {
        const otp = await OtpService.generate(email);
        let isExist;
        switch (type) {
            case 'RESET_PASSWORD':
                isExist = await UserRepository.findUserByEmail(email, ACCOUNT_TYPE.LOCAL);
                if (!isExist) {
                    throw new BaseError(400, "User not found");
                }
                break;
            case 'SIGN_UP':
                isExist = await UserRepository.findUserByEmail(email, ACCOUNT_TYPE.LOCAL);
                if (isExist) {
                    throw new BaseError(400, "Email already in use");
                }
                break;
            default:
                break;

        }

        await sendMail(
            email,
            type,
            { otp, otpExpiresInMinutes: env.OTP_EXPIRE_MINUTES }
        );
    },
};
