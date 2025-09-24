import { ACCOUNT_TYPE } from '../contants/account-type.contant.js';
import { MAIL_TYPE } from '../contants/mail.contant.js';
import { authSchemas } from '../schemas/auth.schema.js';

export const authSwagger = {
    '/api/auths/login': {
        post: {
            tags: ['Auths'],
            summary: 'User login',
            description: 'Login with email/password or third-party access token if login with Google/Facebook',
            parameters: [
                {
                    name: 'type',
                    in: 'query',
                    required: true,
                    schema: {
                        type: 'string',
                        enum: [ACCOUNT_TYPE.LOCAL, ACCOUNT_TYPE.GOOGLE, ACCOUNT_TYPE.FACEBOOK],
                    },
                    description: 'Type of account to login with',
                }
            ],
            requestBody: {
                required: true,

                content: {
                    'application/json': {
                        schema: authSchemas.LoginRequest,
                    }
                }
            },
            responses: {}
        }
    },

    '/api/auths/send-otp': {
        post: {
            tags: ['Auths'],
            summary: 'Send OTP to email',
            description: 'Send OTP to email for registration or password reset',
            parameters: [
                {
                    name: 'type',
                    in: 'query',
                    required: true,
                    schema: {
                        type: 'string',
                        enum: [MAIL_TYPE.SIGN_UP, MAIL_TYPE.RESET_PASSWORD],
                    },
                    description: 'Type of OTP to send',
                }
            ],
            requestBody: {
                required: true,

                content: {
                    'application/json': {
                        schema: authSchemas.SendOtpRequest,
                    }
                }
            },
            responses: {}
        }
    }
};
