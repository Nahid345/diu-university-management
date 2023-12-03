import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes

// app.use("/api/users");

const getAController = (req: Request, res: Response) => {
  res.send('Hello')
}

app.get('/', getAController)

export default app
