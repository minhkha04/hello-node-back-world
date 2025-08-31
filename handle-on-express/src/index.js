import express from 'express'
import cors from 'cors'
import  rootRouter  from './routers/rootRoute.js'

const app = express()

app.listen(8080)

app.use(express.json())

app.use(cors())

app.use("/api", rootRouter)

app.use(express.static("."))


// yarn init to create a package.json file

// yarn add express to install the express package

// yarn add nodemon to automatically restart the server during development

// yarn add mysql2 to interact with MySQL database

// yarn add cors to enable CORS


// yarn sequelize to install the sequelize package
// sequelize is ORM help to entity to table (code first) but not support table to entity (database first)

// app.post("/demo/:age", (req, res) => {

//     requestParams
//     let { id, name } = req.query

//     pathVariables
//     let { age } = req.params

//     body
//     let { email, password } = req.body

//     res.status(200).send(`Hello ${name}: ${id}, Age: ${age}, Email: ${email}, Password: ${password}`)
// })
