import { BaseError } from "../utils/base-error.util.js";
import { ACCOUNT_TYPE } from "../contants/account-type.contant.js";
import { UserRepository } from "../repositories/user.repository.js";

export const AuthService = {
    async login(email, password, access_token, type) {

        switch (type) {
            case ACCOUNT_TYPE.LOCAL:
                if (!email || !password) {
                    throw new BaseError(400, "Email and password are required");
                }
                break;
            case ACCOUNT_TYPE.GOOGLE:
            case ACCOUNT_TYPE.FACEBOOK:
                if (!access_token) {
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
        if (type === ACCOUNT_TYPE.LOCAL && user.password !== password) {
            throw new BaseError(401, "Invalid password");
        }
        return {
            token: 'dummy-jwt-token',
            access_token: 'dummy-access-token'
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
    }
};
