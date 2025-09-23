import { authSwaggerSchema } from '../schemas/auth/auth.schema.js';

const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'User API',
        version: '1.0.0',
    },
    paths: {
        '/api/auth/login': {
            post: {
                tags: ['Auths'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: authSwaggerSchema,
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Success',
                    },
                    400: {
                        description: 'Sai dữ liệu đầu vào',
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            Auth: authSwaggerSchema,
        },
    },
};

export default swaggerDocument;
