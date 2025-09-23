import User from "../models/user.model.js";

export const UserRepository = {
    async findUserByEmail(email, accout_type) {
        return await User.findOne({ email, accout_type });
    },

    async createUser(userData) {
        const newUser = new User(userData);
        return await newUser.save();
    }
}