import Joi from 'joi';

export const LoginRequest = Joi.object({
    email: Joi.string()
        .email()
        .optional()
        .messages({
            'string.email': 'Email không hợp lệ',
        }),
    password: Joi.string()
        .min(6)
        .optional()
        .messages({
            'string.min': 'Password phải có ít nhất 6 ký tự',
        }),
    access_token: Joi.string().optional(),
});
