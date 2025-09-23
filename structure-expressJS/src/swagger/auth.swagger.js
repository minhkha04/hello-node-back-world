import { decrypt } from 'dotenv';
import { ACCOUNT_TYPE } from '../contants/account-type.contant.js';
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
    }
};
