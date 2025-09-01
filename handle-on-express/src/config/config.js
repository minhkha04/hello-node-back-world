import dotenv from 'dotenv'

dotenv.config()

export default {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    secretKey: process.env.SECRET_KEY
}
// yarn add dotenv