import { authSwagger } from '../swagger/auth.swagger.js';

const swaggerDocument = {

    openapi: '3.0.0',
    info: {
        title: 'My App',
        version: '1.0.0',
    },

    servers: [
        {
            url: 'http://localhost:8080',  // Địa chỉ API cho môi trường phát triển
            description: 'Local Development',
        },
    ],

    paths: {
        ...authSwagger,
    },

    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};
export default swaggerDocument;

