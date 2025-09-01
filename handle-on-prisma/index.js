// 1 create file index.js
// 2 yarn init
// 3 update package.json "scripts": { "start": "nodemon index.js" }
// 4 yarn add express dotenv cors nodemon


// yarn add prisma @prisma/client
// yarn prisma init
// database first: yarn prisma db pull
// code first: yarn prisma first
import express from "express"

const app = express()
app.use(express.json())
app.listen(8080)

app.get("/", (req, res) => {
  res.send("Hello World")
})