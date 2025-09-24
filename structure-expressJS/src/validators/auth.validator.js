import e from 'express';
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
    token_third_party: Joi.string()
        .optional(),
});

export const SendOtpRequest = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'any.required': 'Email là bắt buộc',
        })
});