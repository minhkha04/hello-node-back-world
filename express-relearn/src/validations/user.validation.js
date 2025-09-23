import Joi from 'joi';

export const userRegisterSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'string.empty': 'Email không được để trống',
            'any.required': 'Email là bắt buộc'
        }),

    password: Joi.string()
        .required()
        .messages({
            'string.empty': 'Mật khẩu không được để trống',
            'any.required': 'Mật khẩu là bắt buộc'
        }),

    otpCode: Joi.string()
        .length(6)
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            'string.length': 'OTP phải gồm đúng 6 chữ số',
            'string.pattern.base': 'OTP chỉ được chứa chữ số',
            'string.empty': 'OTP không được để trống',
            'any.required': 'OTP là bắt buộc'
        })
}).options({ abortEarly: false });
