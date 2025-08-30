import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'


const connectDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'minhkha1606',
    database: 'node',
    port: '3306'
})

const app = express()

app.listen(8080)

app.use(express.json())

app.use(cors())

app.post("/demo/:age", (req, res) => {

    // requestParams
    let { id, name } = req.query

    // pathVariables
    let { age } = req.params

    // body
    let { email, password } = req.body

    res.status(200).send(`Hello ${name}: ${id}, Age: ${age}, Email: ${email}, Password: ${password}`)
})

app.get("/user", (req, res) => {
    connectDB.query("SELECT * FROM users", (err, data) => {
        
        res.status(200).send(data)
    })

})

// yarn init to create a package.json file

// yarn add express to install the express package

// yarn add nodemon to automatically restart the server during development

// yarn add mysql2 to interact with MySQL database

// yarn add cors to enable CORS
