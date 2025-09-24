import { RefreshToken } from "../models/refresh-token.model.js";

export const RefreshTokenRepository = {
    async create(data) {
        return await RefreshToken.create(data);
    },

    async findByHash(tokenHash) {
        return await RefreshToken.find({
            tokenHash,
            isRevoked: false,
        })
    },

    async update(id, data) {
        return await RefreshToken.findByIdAndUpdate(id, data, { new: true });
    }
}