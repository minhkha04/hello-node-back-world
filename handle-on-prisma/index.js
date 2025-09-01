// 1 create file index.js
// 2 yarn init
// 3 update package.json "scripts": { "start": "nodemon index.js" }
// 4 yarn add express dotenv cors nodemon


// yarn add prisma @prisma/client
// yarn prisma init
// database first: yarn prisma db pull
// code first: yarn prisma db push
// yarn prisma generate to update client

import express from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.listen(8080)

app.get("/", async (req, res) => {
  let data = await prisma.foods.findMany({
    include: {
      food_types: true
    },
  })
  res.json(data)
})

app.post("/", async (req, res) => {
  let { name, food_type_id } = req.body

  let data = await prisma.foods.create({
    data: {
      name, food_type_id
    }
  })
  res.json(data)
})

app.put("/:id", async (req, res) => {
  let { id } = req.params
  let { name, food_type_id } = req.body
  let data = await prisma.foods.update({
    where: { id: Number(id) },
    data: { name, food_type_id }
  })
  res.json(data)
})