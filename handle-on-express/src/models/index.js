import { Sequelize } from 'sequelize'
import config from '../config/config.js'

let sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
})

try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}

export default sequelize

// yarn add sequelize-auto support database first
// yarn sequelize-auto -h <host> -d <database> -u <user> -x <password> -p <port> --dialect [dialect] -o [/path/to/models] -l es6

// yarn sequelize-auto -h localhost -d node -u root -x minhkha1606 -p 3306 --dialect mysql -o /src/models -l esm
