import { env } from '../config/environment.js';
import { OtpRepository } from '../repositories/otp.repository.js';
import { hash } from '../utils/bcrypt.util.js';

export const OtpService = {
    async generate(email) {
        await OtpRepository.deleteByEmail(email);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + env.OTP_EXPIRE_MINUTES * 60 * 1000);
        await OtpRepository.create({ email, otp: hash(otp), expiresAt });
        return otp;
    },

    async verify(email, otpInput) {
        const record = await OtpModel.findOne({
            email,
            otp: otpInput,
        });

        if (!record) {
            return false;
        }

        if (record.expiresAt < new Date()) {
            return false;
        }

        await OtpModel.deleteOne({ _id: record._id }); // Xoá sau khi dùng
        return true;
    }
};
