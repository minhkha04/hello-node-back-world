import 'dotenv/config';

export const env = {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    PREFIX: process.env.PREFIX,
    PORT: process.env.PORT,
    PREFIX_SWAGGER: process.env.PREFIX_SWAGGER,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
}